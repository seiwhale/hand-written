/**
 * 正常操作
 * @param {*} fn
 * @param {*} args
 * @returns
 */
var curry = function (fn, args = []) {
  var length = fn.length //计算期望函数的参数长度
  args = args //利用闭包特性保存参数
  return function () {
    newArgs = [].slice.call(arguments) //将自身函数参数赋给新参数
    ;[].push.apply(newArgs, args) //将上回保留的参数push进新的数组

    if (newArgs.length < length) {
      //判断当前函数的参数是否与期望函数参数一致
      return curry.call(this, fn, newArgs) //如果不够，递归调用
    } else {
      return fn.apply(this, newArgs) // 如果够，就执行期望函数
    }
  }
}
function add(a, b) {
  return a + b
}
var addcurry = curry(add)

/**
 * ES6骚操作
 * @param {*} fn
 * @param {*} arr
 * @returns
 */
const curry = (fn, arr = []) => (...args) =>
  ((arg) => (arg.length === fn.length ? fn(...arg) : curry(fn, arg)))([
    ...arr,
    ...args,
  ])

function multiFn(a, b, c) {
  return a * b * c
}
var multi = curry(multiFn)

console.log(multi(2)(3)(4))
console.log(multi(2, 3, 4))
console.log(multi(2)(3, 4))
console.log(multi(2, 3)(4))

/**
 * 参数个数不固定时
 */
function curry_add() {
  var args = [...arguments]
  // 参数收集
  var fn = function () {
    args.push(...arguments)
    return curry_add.apply(null, args)
  }

  // 参数不固定，所以需要用的 toString 或者 valueOf 方法
  fn.toString = function () {
    return args.reduce(function (a, b) {
      return a + b
    })
  }
  return fn
}

console.log(curry_add(1) == 1)
console.log(curry_add(1, 2) == 3)
console.log(curry_add(1, 2)(4) == 7)
console.log(curry_add(1)(3)(4)(5, 6) == 19)
