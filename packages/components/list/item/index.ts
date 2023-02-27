import type { App } from 'vue';
import { VuseOptions } from '../../utils/types';
import ListItem from './list-item.vue';

export { ListItem };
export default {
  title: 'ListItem 列表项',
  category: '通用',
  status: '100%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + ListItem.name, ListItem);
  },
};
