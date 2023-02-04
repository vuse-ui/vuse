import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import viteEslint from 'vite-plugin-eslint';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    viteEslint(),
    // https://github.com/vbenjs/vite-plugin-svg-icons
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'packages/components/icon/svg')],
      symbolId: '[name]',
    }),
  ],
});
