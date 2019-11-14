// 三种实现斐波那契数列的方式
// 优缺点详见 README.md

// 递归实现
function fibonacci_1(n, first = 1, second = 1) {
    if (n <= 1) { return first }
    if (n === 2) { return second }
    return fibonacci_1(n - 1) + fibonacci_1(n - 2);
}

console.log(fibonacci_1(3))
console.log(fibonacci_1(10))

// 尾递归实现
function fibonacci_2(n, first = 1, second = 1){
    if (n <= 1) { return first }
    if (n === 2) { return second }
    if (n === 3) { return first + second }
    return fibonacci_2(n - 1, second, first + second);
}

console.log(fibonacci_2(3))
console.log(fibonacci_2(10))

// 迭代实现
function fibonacci_3(n, first = 1, second = 1) {
    let result = 0;
    if (n <= 1) { result = first }
    if (n === 2) { result = second }
    while (n > 2) {
        result = first + second;
        first = second;
        second = result;
        n--;
    }
    return result;
}

console.log(fibonacci_3(3))
console.log(fibonacci_3(10))
