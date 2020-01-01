function myNew(func) {
  // step1: 创建一个空对象
  const obj = {};
  // step2: 空对象的原型赋值为构造函数的原型
  obj.__proto__ = func.prototype;
  // step3: 绑定 this，并判断返回的是否为对象
  const returnObj = func.apply(obj, Array.prototype.slice.call(arguments, 1));
  const type = typeof returnObj;
  if ((type === "object" || type === "function") && returnObj !== null) {
    return returnObj;
  }
  return obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var li = myNew(Person, "李世杰", "18");
console.log(li);
console.log(li.name);
console.log(li.age);
