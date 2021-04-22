---
id: 402-remove-kdigits
title: 移掉k位数字
sidebar_label: 402. 移掉k位数字
keywords:
  - Stack
---

:::success Tips
题目类型: 单调栈

相关题目:

- [316. 去除重复字母](/leetcode/medium/316-remove-duplicate-letters)
- [496. 下一个更大元素-i](/leetcode/easy/496-next-greater-element)
- [503. 下一个更大元素-ii](/leetcode/medium/503-next-greater-elements)
- [739. 每日温度](/leetcode/medium/739-daily-temperatures)
- [1081. 不同字符的最小子序列](/leetcode/medium/1081-smallest-subsequence)

:::

## 题目

给定一个以字符串表示的非负整数 num, 移除这个数中的 k 位数字, 使得剩下的数字最小.

注意:

- num 的长度小于 10002 且 >= k
- num 不会包含任何前导零

:::info 示例

```ts
输入: num = "1432219", k = 3
输出: "1219"
解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219.
```

```ts
输入: num = "10200", k = 1
输出: "200"
解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零.
```

```ts
输入: num = "10", k = 2
输出: "0"
解释: 从原数字移除所有的数字, 剩余为空就是0.
```

:::

## 题解

单调栈的作用是**要给当前的元素, 找右边/左边第一个比它大/小的位置**, 那怎么跟这个题联系到一起呢? 以 num = 1432219 为例:

- 第一个元素是 1
- 第二个元素是 4, 因为 4 > 1, 所以不能让 4 去代替 1, 否则数字 4xx 肯定大于 1xx
- 第三个元素是 3, 因为 3 < 4, 此时可以让 3 去代替 1, 此时最小数字为 13xxx, 它肯定是小于 14xxx 的
- ...

这样来看, 我们实际上是在找**某个元素右边第一个比他小的元素**, 以代替该元素, 那自然就是单调栈了.

```ts
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = []
  const remain = num.length - k

  for (const digit of num) {
    while (k && stack.length !== 0 && stack[stack.length - 1] > digit) {
      stack.pop()
      k--
    }

    stack.push(digit)
  }

  // 注意:
  // stack 只取前 remain 个元素
  // 要去掉前导零的情况, 这里用正则
  return stack.slice(0, remain).join('').replace(/^0+/, '') || '0'
}
```