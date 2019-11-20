function bubblSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
         // 相邻元素两两对比，元素交换，大的元素交换到后面
        if (arr[j] > arr[j + 1]) {
            var a = arr[j], b = arr[j+1];
            // 这边我们顺便讲一下两个数的互换
            // 1、变量存储
            // var temp = a;
            // a = b;
            // b = a;
            // 2、加减
            // a = a + b;
            // b = a - b;
            // a = a - b;
            // 3、异或
            // a = a ^ b;
            // b = a ^ b;
            // a = a ^ b;
            // 4、数组
            // var temp = [a, b];
            // a = temp[1];
            // b = temp[0];
            // 5、对象
            // var obj = {
            //     a: b,
            //     b: a,
            // };
            // a = obj[a];
            // b = obj[b];
            // 6、运算优先级
            // a = [b, b=a][0];
            // 7、结构
            [a, b] = [b, a];
        }
    }
  }
  return arr;
}

//举个数组
myArr = [20, 18, 27, 19, 35];
//使用函数
bubblSort(myArr)
