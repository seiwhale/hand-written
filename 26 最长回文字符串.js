/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  //
  return violentSolution(s)
}

// 方法1: 暴力解法
var violentSolution = function (s) {
  if (s.length < 2) return s

  let max_len = 1,
    begin = 0
  for (let i = 0; i < s.length - 1; i++) {
    for (j = i + 1; j < s.length; j++) {
      let is_palindromic = isPalindromic(s, i, j)
      let new_len = j - i + 1
      if (is_palindromic && new_len > max_len) {
        max_len = new_len
        begin = i
      }
    }
  }

  return s.substring(begin, begin + max_len)
}

var isPalindromic = function (s, i, j) {
  let left = i,
    right = j
  while (left < right) {
    if (s[left] != s[right]) return false
    else {
      left++
      right--
    }
  }
  return true
}

// 方法二: 中心扩散
var centralDiffusion = function (s) {
  let len = s.length
  if (len < 2) return s

  let maxLen = 1,
    begin = 0
  for (let i = 0; i < len - 1; i++) {
    const oddMaxLength = expandAroundCenter(s, i, i)
    const evenMaxLength = expandAroundCenter(s, i, i + 1)
    let currentMaxLength = Math.max(oddMaxLength, evenMaxLength)

    if (currentMaxLength > maxLen) {
      maxLen = currentMaxLength
      begin = i - Math.floor((maxLen - 1) / 2)
    }
  }

  return s.substring(begin, begin + maxLen)
}

var expandAroundCenter = function (s, left, right) {
  let len = s.length
  while (left >= 0 && right < len) {
    if (s[left] == s[right]) {
      left--
      right++
    } else {
      break
    }
  }
  return right - left - 1
}

/**********************************************/
var str = "ababdbasdjkasdjkasadasda"
console.log(longestPalindrome(str))
console.log(centralDiffusion(str))
