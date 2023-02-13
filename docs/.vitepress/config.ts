import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Vuse-UI',
  description: 'A modern Vue3 component library',
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'ButtonGroup' }
        ]
      }
    ],
  }
});