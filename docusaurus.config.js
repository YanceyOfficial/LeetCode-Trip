/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'LeetCode Trip',
  tagline: 'LeetCode Trip',
  url: 'https://algorithm.yanceyleo.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Yancey Inc.',
  projectName: 'leetcode-trip',
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'leetcode',
        path: 'leetcode-docs',
        editUrl: 'https://github.com/YanceyOfficial/leetcode-trip/edit/master',
        routeBasePath: 'leetcode',
        sidebarPath: require.resolve('./sidebarsLeetcode.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algorithm-design',
        path: 'algorithm-design-docs',
        editUrl: 'https://github.com/YanceyOfficial/leetcode-trip/edit/master',
        routeBasePath: 'algorithm-design',
        sidebarPath: require.resolve('./sidebarsAlgorithmDesign.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'data-structure',
        path: 'data-structure-docs',
        editUrl: 'https://github.com/YanceyOfficial/leetcode-trip/edit/master',
        routeBasePath: 'data-structure',
        sidebarPath: require.resolve('./sidebarsDataStructure.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
      },
    ],
  ],
  themeConfig: {
    algolia: {
      apiKey: 'xxxx',
      indexName: 'xxxx',
      contextualSearch: true,
    },
    navbar: {
      title: 'LeetCode Trip',
      logo: {
        alt: 'LeetCode Trip Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/leetcode/twoSum',
          label: 'LeetCode',
          position: 'left',
          activeBaseRegex: '/leetcode/',
        },
        {
          to: '/algorithm-design/backtrack',
          label: 'Algorithm Design',
          position: 'left',
          activeBaseRegex: '/algorithm-design/',
        },
        {
          to: '/data-structure/stack',
          label: 'Data Structure',
          position: 'left',
          activeBaseRegex: '/data-structure/',
        },
        {
          href: 'https://github.com/YanceyOfficial',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Yancey Inc. and its affiliates.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/YanceyOfficial/leetcode-trip/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
