type Last = {
  <T>(arr: T[]): T;
};

type Prepend = {
  <T>(arr: any[], item: T): any[];
};

const last: Last = (arr) => {
  // 배열의 마지막 요소 반환
  return arr[arr.length - 1];
};

const prepend: Prepend = (arr, item) => {
  //배열의 시작부분에 item을 넣고 배열을 return
  arr.splice(0, 0, item);
  return arr;
};
