import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'build',
  themeConfig: {
    name: 'GM命令',
    logo: '',
    nav: [
      { title: '角色相关', link: '/person' },
      { title: '物品相关', link: '/goods' },
      { title: '声望', link: '/reputation' },
    ],
  },
});
