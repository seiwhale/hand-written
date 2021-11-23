/**
 * https://leetcode-cn.com/problems/aseY1I/
 * 给定一个字符串数组 words
 * 请计算当两个字符串 words[i] 和 words[j] 不包含相同字符时
 * 它们长度的乘积的最大值。
 *  - 假设字符串中只包含英语的小写字母。
 *  - 如果没有不包含相同字符的一对字符串，返回 0。
 * @examples
 * ```
 * 输入: words = ["abcw","baz","foo","bar","fxyz","abcdef"]
 * 输出: 16
 * 解释: 这两个单词为 "abcw", "fxyz"。它们不包含相同字符，且长度的乘积最大。
 * ```
 */

/**
 * maxProduct
 * @param {string[]} words
 */
var maxProduct = function (words) {
  let len = words.length,
    result = 0

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (!hasSameChar(words[i], words[j])) {
        result = Math.max(result, words[i].length * words[j].length)
      }
    }
  }

  return result
}

/**
 * 判断两个字符串是否有相同字符
 * @param {string} A 字符串A
 * @param {string} B 字符串B
 */
var hasSameChar = function (A, B) {
  let wordCode1 = getCharCode(A),
    wordCode2 = getCharCode(B)

  return (wordCode1 & wordCode2) !== 0
}

/**
 * 获取当前字符的 charCode
 * @param {string} word 字符串
 */
var getCharCode = function (word = "") {
  let wordCode = 0,
    baseChar = "a"

  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    let minus = char.charCodeAt() - baseChar.charCodeAt()
    wordCode = wordCode | (1 << minus)
  }

  return wordCode
}
