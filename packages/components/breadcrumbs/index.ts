import type { App } from 'vue';
import Breadcrumbs from './breadcrumbs.vue';

export { Breadcrumbs };
export default {
  title: 'Breadcrumbs 面包屑',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Breadcrumbs.name, Breadcrumbs);
  },
};
