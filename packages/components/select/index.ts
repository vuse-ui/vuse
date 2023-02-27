import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Select from './select.vue';

export { Select };
export default {
  title: 'Select 选择器',
  category: '通用',
  status: '50%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Select.name, Select);
  },
};
