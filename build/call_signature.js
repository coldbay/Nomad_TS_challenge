var last = function (arr) {
    return arr[arr.length - 1];
};
var prepend = function (arr, item) {
    arr[0] = item;
    return arr;
};
var array = ["fdf", "sefs", "sfsef"];
console.log(last(array));
