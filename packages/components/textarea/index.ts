import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Textarea from './textarea.vue';

export { Textarea };
export default {
  title: 'Textarea 输入框',
  category: 'Inputs',
  status: '16%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Textarea.name, Textarea);
  },
};
