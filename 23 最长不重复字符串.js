/*
 * @Descripttion: 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度
 * @Author: seiwhale
 * @Date: 2020-07-01 14:55:32
 * @LastEditors: seiwhale
 * @LastEditTime: 2020-07-01 14:55:48
 */

var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};


/**
 * 优化：返回最长重复字符串的 长度、字符、起始、截止下标
 * @param {*} str 
 */
const findMaxLengthString = (str) => {
  const occ = new Map()
  let data, occ_key = 'max'

  for (let i = 0, j = 1; i < str.length; j++) {
    if (str[i] !== str[j]) {
      if (occ.has(occ_key)) data = occ.get(occ_key)
      if (!data || data.count < j - i) occ.set(occ_key, { start: i, end: j, char: str[i], count: j - i })
      i = j
    }
  }

  return occ.get(occ_key)
}