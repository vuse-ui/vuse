import type { App } from 'vue';
import ListItem from './list-item.vue';

export { ListItem };
export default {
  title: 'ListItem 列表项',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(ListItem.name, ListItem);
  },
};
