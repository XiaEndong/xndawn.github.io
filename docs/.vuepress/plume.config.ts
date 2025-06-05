/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: {
    src: 'https://blog-1329948899.cos.ap-guangzhou.myqcloud.com/佩佩',
    width: '50px',  // 设置 Logo 宽度
    height: 'auto'   // 自动保持比例
  },

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/xndawn' },
    { icon: "bilibili", link: 'https://space.bilibili.com/1767653524?spm_id_from=333.1007.0.0' },
    {icon: "qq",link:'https://ti.qq.com/open_qq/index2.html?url=mqqapi%3a%2f%2fuserprofile%2ffriend_profile_card%3fsrc_type%3dweb%26version%3d1.0%26source%3d2%26uin%3d752790033'},
    {icon:"twitter",link:'https://x.com/elonmusk'},
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: false,

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: 'https://blog-1329948899.cos.ap-guangzhou.myqcloud.com/佩佩',
        name: 'Xia Endong',
        description: '',
        circle: true,
        location: 'ZheJiang , China',
        organization: '浙江师范大学',
      },

      navbar: zhNavbar,
      notes: zhNotes,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       // bulletin: {
       //   layout: 'top-right',
       //   contentType: 'markdown',
       //   title: '',
       //   content: '',
       // },
    },
    '/en/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'Xia Endong',
        description: 'my blog',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       // bulletin: {
       //   layout: 'top-right',
       //   contentType: 'markdown',
       //   title: '',
       //   content: '',
       // },
    },
  },
})
