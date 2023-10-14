import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  themeConfig: {
    name: 'GM命令',
    logo: '',
    nav: [
      { title: '角色相关', link: '/person' },
      { title: '物品相关', link: '/goods' },
      { title: '声望', link: '/reputation' },
    ],
    // 静态资源路径
    // publicPath: '.'
  },
});
