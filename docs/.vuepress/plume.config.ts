import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */

export default defineThemeConfig({

  logo: 'https://theme-plume.vuejs.press/plume.png',
  // // your git repo url
  // docsRepo: 'https://github.com/xndawn/xndawn.github.io.git',
  // docsDir: 'docs',


  appearance: true,

  profile: {
    avatar: 'https://blog-1329948899.cos.ap-guangzhou.myqcloud.com/佩佩',
    name: 'Xia Endong',
    description: '',
    circle: true,
    location: 'ZheJiang , China',
    organization: '浙江师范大学',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/xndawn' },
    { icon: "bilibili", link: 'https://space.bilibili.com/1767653524?spm_id_from=333.1007.0.0' },
    {icon: "qq",link:'https://ti.qq.com/open_qq/index2.html?url=mqqapi%3a%2f%2fuserprofile%2ffriend_profile_card%3fsrc_type%3dweb%26version%3d1.0%26source%3d2%26uin%3d752790033'},
    {icon:"twitter",link:'https://x.com/elonmusk'},
  ],

})
