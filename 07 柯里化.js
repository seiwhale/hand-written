// ES6骚操作
const curry = (fn, arr = []) => (...args) => (
  arg => arg.length === fn.length
      ? fn(...arg)
      : curry(fn, arg)
)([...arr, ...args])

function multiFn(a, b, c) {
return a * b * c
}
var multi = curry(multiFn);

console.log(multi(2)(3)(4));
console.log(multi(2, 3, 4));
console.log(multi(2)(3, 4));
console.log(multi(2, 3)(4));