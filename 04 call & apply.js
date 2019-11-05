// call
Function.prototype.myCall = function (content = window) {
  // 将函数设为对象的属性
  // 指定 `this` 到函数并传入给定参数执行函数
  content.fn = this;
  // 获取参数
  let args = [...arguments].slice(1);
  // 执行函数
  let result = content.fn(...args);
  // 删除函数
  delete content.fn;
  // 返回结果
  return result;
}

const foo = {
value: 1
}
function bar(name, age) {
  console.log(name) 
  console.log(age) 
  console.log(this.value)
}
bar.myCall(foo, 'black', '18')

// apply
Function.prototype.myApply = function (content = window) {
  // 将函数设为对象的属性
  // 指定 `this` 到函数并传入给定参数执行函数
  content.fn = this;
  // 获取参数 & 执行函数
  let result = content.fn(...arguments[1]);
  // 删除函数
  delete content.fn;
  // 返回结果
  return result;
}

const foo1 = {
value: 2
}
function bar1(name, age) {
  console.log(name) 
  console.log(age) 
  console.log(this.value)
}
bar1.myApply(foo1, ['white', '16'])