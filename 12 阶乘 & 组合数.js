/**
 * 计算组合数
 * @param {number} n 
 * @param {number} m 
 * @return {number}
 */
var combination = (n, m) => {
  if (n == null || m == null) throw Error(' 参数缺少或不能为空')
  if (n < 0 || m < 0) throw Error(' The parameter passed in cannot be negative.')
  if (n === 0 || m === 0) return 1
  // 如果 n < m 则替换两个数的位置    
  if (n < m) [n, m] = [m, n];

  return factorial(n, m) / factorial(m);
};

/**
* 计算阶乘
* @param {number} n 
* @param {number} m 
* @return {number}
*/
var factorial = (n, m = n) => {
  if (!n) { return 0 }

  // 负数
  if (n < 0) {
      throw Error(' The parameter passed in cannot be negative.')
  }

  // 如果 n < m 则替换两个数的位置    
  if (n < m) [n, m] = [m, n];
  
  if (n <= 1 || m <= 0) return 1;
  
  if (m === 1) return n;
  else return (n * factorial(n - 1, m - 1)); 
}

// 阶乘验证可参考下面网址对比结果
// https://zh.numberempire.com/factorialcalculator.php 
console.log(factorial(5))

// 组合数验证可参考下面网址对比结果
// https://zh.numberempire.com/combinatorialcalculator.php 
console.log(combination(0,2))