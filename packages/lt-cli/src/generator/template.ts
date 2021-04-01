export const generateTemplate = (
  serial: string,
  title: string,
  functionName: string,
  functionBody: string,
) =>
  `---
id: ${serial}-${functionName}
title: ${title}
sidebar_label: ${serial}. ${title}
---

## 题目

这里是题目这里是题目这里是题目这里是题目这里是题目

:::info 示例

输入:

输出:
:::

## 题解

这里是题解这里是题解这里是题解这里是题解这里是题解

\`\`\`ts
${functionBody}
\`\`\`
`