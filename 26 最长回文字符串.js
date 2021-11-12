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

// 方法三: 动态规划
var dynamicProgramming = function (s) {
  let len = s.length
  if (len < 2) return s

  let maxLen = 1,
    begin = 0
  let dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len)
    dp[i][i] = true
  }

  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] != s[j]) {
        dp[i][j] = false
      } else if (j - i < 3) {
        dp[i][j] = true
      } else {
        dp[i][j] = dp[i + 1][j - 1]
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }

  return s.substring(begin, begin + maxLen)
}

/**********************************************/
var str = "ababdbasdjkasdjkasadasda"
console.log(longestPalindrome(str))
console.log(centralDiffusion(str))
console.log(dynamicProgramming(str))
