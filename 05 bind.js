Function.prototype.myBind = function(content) {
  // 是否为函数_若不考虑参数类型可以省略
  if (typeof this !== "function") {
    throw Error("not a function.");
  }
  // 获取参数
  let fn = this;
  let args = [...arguments].slice(1);

  // 创建一个新的函数
  let resFn = function() {
    // 判断是否继承于该函数
    return fn.apply(this instanceof resFn ? this : content, [
      ...args,
      ...arguments
    ]);
  };
  // 返回一个新的函数
  return resFn;
};

var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.myBind(module);
console.log(boundGetX());
