import type { App } from 'vue';
import Notification from './notification.vue';

export { Notification };
export default {
  title: 'Notification 提示',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Notification.name, Notification);
  },
};
