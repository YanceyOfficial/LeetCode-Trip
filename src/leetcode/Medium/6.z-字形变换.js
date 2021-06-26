/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const n = s.length
  if (numRows < 2) return s

  const res = Array(n).fill('')
  const cycleLen = (numRows - 1) * 2

  for (let i = 0; i < n; i++) {
    const carry = i % cycleLen
    res[carry < numRows ? carry : cycleLen - carry] += s[i]
  }

  return res.join('')
}
// @lc code=end
