import type { App } from 'vue';
import Input from './input.vue';

export { Input };
export default {
  title: 'Input 输入框',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Input.name, Input);
  },
};
