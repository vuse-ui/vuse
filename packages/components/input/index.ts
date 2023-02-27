import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Input from './input.vue';

export { Input };
export default {
  title: 'Input 输入框',
  category: '通用',
  status: '100%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Input.name, Input);
  },
};
