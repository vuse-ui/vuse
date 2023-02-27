import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Notification from './notification.vue';

export { Notification };
export default {
  title: 'Notification 提示',
  category: '通用',
  status: '100%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Notification.name, Notification);
  },
};
