import type { App } from 'vue';
import Icon from './icon.vue';

export { Icon };
export default {
  title: 'Icon 图标',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Icon.name, Icon);
  },
};
