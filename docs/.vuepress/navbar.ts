/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: 'markdown', link: '/notes/markdown/1.markdown基础.md' },
      { text: '目标检测_YOLO', link: '/notes/目标检测_YOLO/基于YOLO模型的路面交通标志检测研究.md' },

    ],
  },
])
