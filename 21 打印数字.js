// 自执行函数
for (var i=0; i<5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000*i)
  })(i)
}

// es6块级作用域let
for (let i=0; i<5; i++) {
    setTimeout(() => console.log(i), 1000*i)
}

// 传址传递
var out = (i) => {
  setTimeout (() => console.log(i), 1000*i)
}
for (var i=0; i<5; i++) {
  out(i)
}

// Promise.all()
var arr = []
var output = (i) => new Promise(res => {
  setTimeout(()=>{
    console.log(i)
    res()
  }, 1000*i)
})
for (var i=0; i<5; i++) {
  arr.push(output(i))
}
Promise.all(arr).then(()=> console.log(5))
    
// async await
var sleep = () => new Promise (res => setTimeout(res, 1000))
(async function () {
  for (let i=0; i<5; i++) {
    await sleep()
    console.log(i)
  }
})()
