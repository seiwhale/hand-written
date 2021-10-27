/**
 * 快速排序
 *  1. 在数据集之中，选择一个元素作为"基准"（pivot）
 *  2. 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边
 *  3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止
 **/

function quickSort(arr) {
  if (arr.length <= 1) return arr
  // 获取基准点
  var pivotIndex = Math.floor(arr.length / 2)
  var pivotVal = arr.splice(pivotIndex, 1)[0]
  // 将小于基准点值放入left，大于基准点值放入right
  var left = [],
    right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivotVal) left.push(arr[i])
    else right.push(arr[i])
  }
  // 循环上述操作至剩下一个元素位为止
  return quickSort(left).concat([pivotVal], quickSort(right))
}

var arr = [1, 4, 5, 32, 8, 27, 123, 44, 98, 15]
console.log(quickSort(arr))
