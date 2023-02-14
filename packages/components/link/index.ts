import type { App } from 'vue';
import Link from './link.vue';

export { Link };
export default {
  title: 'Link 链接',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Link.name, Link);
  },
};
