// 三种实现斐波那契数列的方式
/**
 * 
  # 斐波那契数列的 js 实现

  ## 递归实现

  缺点：
  - 只是使用于n比较小的时候，否则效率低，因为会做很多次重复操作
  - 而且该例递归属于多分支递归，容易造成栈溢出

  ## 尾递归实现

  优点：
  - 计算结果参与到下一次的计算，从而减少很多重复计算量
  - 原本朴素的递归产生的栈的层次像二叉树一样，以指数级增长，但是尾递归栈的层次却像是数组，变成线性增长了，简单来说，原本栈是先扩展开，然后边收拢边计算结果，现在变成在调用自身的同时通过参数来计算。

  ## 迭代实现

  尾递归可以转换成迭代算法
 *
 */

// 递归实现
function fibonacci_1(n, first = 1, second = 1) {
  if (n <= 1) {
    return first;
  }
  if (n === 2) {
    return second;
  }
  return fibonacci_1(n - 1) + fibonacci_1(n - 2);
}

console.log(fibonacci_1(3));
console.log(fibonacci_1(10));

// 尾递归实现
function fibonacci_2(n, first = 1, second = 1) {
  if (n <= 1) {
    return first;
  }
  if (n === 2) {
    return second;
  }
  if (n === 3) {
    return first + second;
  }
  return fibonacci_2(n - 1, second, first + second);
}

console.log(fibonacci_2(3));
console.log(fibonacci_2(10));

// 迭代实现
function fibonacci_3(n, first = 1, second = 1) {
  let result = 0;
  if (n <= 1) {
    result = first;
  }
  if (n === 2) {
    result = second;
  }
  while (n > 2) {
    result = first + second;
    first = second;
    second = result;
    n--;
  }
  return result;
}

console.log(fibonacci_3(3));
console.log(fibonacci_3(10));
