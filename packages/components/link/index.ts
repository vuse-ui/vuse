import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Link from './link.vue';

export { Link };
export default {
  title: 'Link 链接',
  category: '通用',
  status: '100%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Link.name, Link);
  },
};
