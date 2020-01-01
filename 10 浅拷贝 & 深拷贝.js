/*********************** 浅拷贝 *******************/
// for in
function copy(obj) {
  let _obj = {};
  for (let k in obj) {
    _obj[k] = obj[k];
  }
  return _obj;
}

// Object.assign()
var obj = { a: { a: "kobe", b: 39 } };
var initalObj = Object.assign({}, obj);
initalObj.a.a = "wade";
console.log(obj.a.a); //wade

// 数组
// Array.prototype.concat()
let arr = [
  1,
  3,
  {
    username: "kobe"
  }
];
let arr2 = arr.concat();

// Array.prototype.slice()
let arr3 = arr.slice();

/*********************** 深拷贝 *******************/
// JSON.parse()
// 通过之前我们手写 JSON.stringify 方式时知道 函数会被忽略掉
// 以这种方式不能处理函数
let arr4 = JSON.parse(JSON.stringify(arr));
arr4[2].username = "duncan";
console.log(arr, arr4);

// 递归
function deepClone(initalObj, finalObj) {
  var obj = finalObj || {};
  for (var i in initalObj) {
    var prop = initalObj[i]; // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if (prop === obj) {
      continue;
    }
    if (typeof prop === "object") {
      obj[i] = prop.constructor === Array ? [] : {};
      arguments.callee(prop, obj[i]);
    } else {
      obj[i] = prop;
    }
  }
  return obj;
}
var str = {};
var obj = { a: { a: "hello", b: 21 } };
deepClone(obj, str);
console.log(str.a);

// Object.create()
function deepClone(initalObj, finalObj) {
  var obj = finalObj || {};
  for (var i in initalObj) {
    var prop = initalObj[i]; // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if (prop === obj) {
      continue;
    }
    if (typeof prop === "object") {
      obj[i] = prop.constructor === Array ? [] : Object.create(prop);
    } else {
      obj[i] = prop;
    }
  }
  return obj;
}
