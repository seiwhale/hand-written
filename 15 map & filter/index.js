// map
Array.prototype.myMap = function(fn) {
  var newArr = [];

  for (var i = 0; i < this.length; i++) {
    newArr[i] = fn(this[i], i, this);
  }

  return newArr;
};

var arr = [1, 2, 3];

console.log(arr.map(item => item * 2));
console.log(arr.myMap(item => item * 2));

// filter
Array.prototype.myFilter = function(fn) {
  var newArr = [];

  for (var i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArr[i] = this[i];
    }
  }

  return newArr;
};

var arr = [1, 2, 3];

console.log(arr.myFilter(item => item % 2 === 1));
console.log(arr.myFilter(item => item % 2 === 1));
