Array.prototype.myReduce = function(fn, initVal = 0) {
    for (var i = 0; i < this.length; i++) {
        initVal = fn(this[i], initVal)
    }
    return initVal;
}

var add = function (a = 0, b = 0) {
    return a + b;
}

var arr = [1, 2, 4, 6, 9];

console.log(arr.myReduce(add))
console.log(arr.reduce(add))
console.log(arr.myReduce(add, 2))
console.log(arr.reduce(add, 2))
