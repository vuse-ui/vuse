import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import List from './list.vue';

export { List };
export default {
  title: 'List ๅ่กจ',
  category: '้็จ',
  status: '100%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + List.name, List);
  },
};
