import type { App } from 'vue';
import List from './list.vue';

export { List };
export default {
  title: 'List 列表',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(List.name, List);
  },
};
