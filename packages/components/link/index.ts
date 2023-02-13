import type { App } from 'vue';
import link from './link.vue';

export { link };
export default {
  title: 'Link 链接',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(link.name, link);
  },
};
