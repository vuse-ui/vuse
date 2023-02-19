import type { App } from 'vue';
import Select from './select.vue';

export { Select };
export default {
  title: 'Select 选择器',
  category: '通用',
  status: '50%',
  install(app: App): void {
    app.component(Select.name, Select);
  },
};
