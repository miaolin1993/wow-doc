import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'build',
  themeConfig: {
    name: '常用GM命令文档',
    logo: '',
    nav: [
      { title: '角色相关', link: '/persion'},
      { title: '物品相关', link: '/goods'},
      { title: '声望', link: '/reputation'},
    ]
  },
});
