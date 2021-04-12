---
id: 92-reverse-between
title: 反转链表-ii
sidebar_label: 92. 反转链表-ii
keywords:
  - LinkedList
---

:::success Tips
题目类型: LinkedList

相关题目: [25. k-个一组翻转链表](/leetcode/hard/25-reverse-k-group), [206. 反转链表](/leetcode/easy/206-reverse-list)
:::

## 题目

反转从位置 m 到 n 的链表. 请使用一趟扫描完成反转.

:::info 示例

输入: 1->2->3->4->5->NULL, m = 2, n = 4

输出: 1->4->3->2->5->NULL
:::

## 题解

### 前菜: 反转链表前 N 个节点

在做这道题之前, 先整个前菜, 也就是**反转链表前 N 个节点**, 这个题跟 [206. 反转链表](/leetcode/easy/206-reverse-list)差不多, 因为是反转前 N 个, 因此得把第 N + 1 个节点记录下来, 以拼接在反转子链表之后.

```ts
let successor = null // 后驱节点

var reverseN = function (head, n) {
  if (n === 1) {
    // 记录第 n + 1 个节点
    successor = head.next
    return head
  }
  // 以 head.next 为起点, 需要反转前 n - 1 个节点
  const last = reverseN(head.next, n - 1)

  head.next.next = head
  // 让反转之后的 head 节点和后面的节点连起来
  head.next = successor
  return last
}
```

### 递归法

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  // 如果 m == 1, 就相当于反转链表开头的 n 个元素
  if (m === 1) {
    return reverseN(head, n)
  }
  // 前进到反转的起点触发 base case
  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
}
```

### 迭代法

- 先创建一个 `dummyHead`, 它的 `next` 指向 `head`;
- 分别创建两个节点 `g(guard 节点)` 和 `p(point 节点)`. 其中前者指向 `dummyHead`, 后者指向 `dummyHead.next`;
- 以 m = 2, n = 4 为例, 将 g 移动到**第一个要反转的节点的前面**, 即节点 1; 将 p 移动到**第一个要反转的节点的位置上**, 即节点 2;
- 接下来是使用"头插法", 将 `p` 后面的去掉, 然后添加到 `g` 的后面.

```ts
var reverseBetween = function (head, m, n) {
  const dummyHead = new ListNode(0)
  dummyHead.next = head

  let g = dummyHead,
    p = dummyHead.next

  for (let step = 0; step < m - 1; step++) {
    g = g.next
    p = p.next
  }

  for (let i = 0; i < n - m; i++) {
    const removed = p.next
    p.next = p.next.next // 将要反转的节点去掉, 比如去掉 3, 此时 p 成了 2->4->5
    removed.next = g.next // removed 此时为 3->4->5, 将 g.next 移过来, 成了 3->2->4->5
    g.next = removed // 将新的 remove 放到 g.next 即可
  }

  return dummyHead.next
}
```