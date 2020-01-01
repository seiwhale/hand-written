function instanceOf(left, right) {
  const proto = Object.getPrototypeOf(left),
    prototype = right.prototype;
  if (proto === null || proto === undefined) {
    return false;
  } else if (proto === prototype) {
    return true;
  } else {
    return instanceOf(Object.getPrototypeOf(proto), right);
  }
}

var a = {};
var b = 2;
console.log(instanceOf(a, Object));
console.log(instanceOf(a, Object));
console.log(instanceOf(b, Object));
console.log(b instanceof Object);
console.log(instanceOf(Object, Function));
console.log(Object instanceof Function);
