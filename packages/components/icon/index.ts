import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Icon from './icon.vue';

export { Icon };
export default {
  title: 'Icon 图标',
  category: '通用',
  status: '100%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Icon.name, Icon);
  },
};
