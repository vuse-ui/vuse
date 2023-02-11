import type { App } from 'vue';
import Avatar from './avatar.vue';

export { Avatar };
export default {
  title: 'Avatar 头像',
  category: 'Content',
  status: '100%',
  install(app: App): void {
    app.component(Avatar.name, Avatar);
  },
};
