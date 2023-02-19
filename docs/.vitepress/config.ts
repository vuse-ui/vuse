import { defineConfig } from 'vitepress';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';

export default defineConfig({
  title: 'Vuse-UI',
  description: 'A modern Vue3 component library',
  base: '/vuse/',
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuse-ui/vuse' }],
    editLink: {
      pattern: 'https://github.com/vuse-ui/vuse/blob/dev/docs/:path',
      text: 'Edit on Github',
    },
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Dark Mode', link: '/guide/dark-mode' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Avatar', link: '/components/avatar/' },
          { text: 'Button', link: '/components/button/' },
          { text: 'Icon' },
          { text: 'Input' },
          { text: 'Notification' },
          { text: 'Textarea', link: '/components/textarea/' },
          { text: 'List', link: '/components/list/' },
          { text: 'Table', link: '/components/table/' },
        ],
      },
    ],
    footer: {
      copyright: 'Copyright © 2023 Vuse-ui',
    },
  },
  markdown: {
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
  vite: {
    plugins: [vueSetupExtend()],
  },
});
