import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Avatar from './avatar.vue';

export { Avatar };
export default {
  title: 'Avatar 头像',
  category: 'Content',
  status: '100%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Avatar.name, Avatar);
  },
};
