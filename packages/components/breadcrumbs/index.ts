import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Breadcrumbs from './breadcrumbs.vue';

export { Breadcrumbs };
export default {
  title: 'Breadcrumbs 面包屑',
  category: '通用',
  status: '100%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Breadcrumbs.name, Breadcrumbs);
  },
};
