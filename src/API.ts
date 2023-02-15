//LocalStorage API - abstract class와 generic을 활용
type index_signature = string | number | symbol

interface SStorage<T>{
    [key:index_signature]:T
}


abstract class blueprint<T> {
    protected storage: SStorage<T> = {}
    abstract setItem(key:index_signature, value:T):void
    abstract getItem(key:index_signature):T
    abstract removeItem(key:index_signature):void
    abstract clear():void
}


class LocalStorage<T> extends blueprint<T>{

    setItem(key:index_signature, value:T){
        this.storage[key] = value
    }
    getItem(key:index_signature){
        return this.storage[key]
    }
    removeItem(key:index_signature){
        delete this.storage[key]
    }
    clear(){
        this.storage = {}
    }

}

// Geolocation 형태 API - overloading을 활용

interface GeoOptions{
    enableHighAccuracy: boolean;
    timeout: number
    maximumAge: number
}

interface Geoblueprint {
    clearWatch(id: number): void;

    getCurrentPosition(
      successFn: Function,
      errorFn?: Function,
      optionsObj?: GeoOptions
    ): void;

    watchPosition(
      success: Function,
      error?: Function,
      options?: GeoOptions
    ): number;
  }

  class geolocation implements Geoblueprint{

    clearWatch(id: number): void {
        console.log(id)
    }

    getCurrentPosition(successFn: Function, errorFn?: Function, optionsObj?: GeoOptions): void {
        if(successFn) console.log(successFn)
        if(errorFn) console.log(errorFn)
        if(optionsObj) console.log(optionsObj.timeout)
    }

    watchPosition(success: Function, error?: Function, options?: GeoOptions): number {
        if(success) console.log(success)
        if(error) console.log(error)
        if(options) console.log(options.timeout)
        return 0
    }
  }


  

  