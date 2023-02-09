import type { App } from 'vue';
import Textarea from './textarea.vue';

export { Textarea };
export default {
  title: 'Textarea 输入框',
  category: 'Inputs',
  status: '16%',
  install(app: App): void {
    app.component(Textarea.name, Textarea);
  },
};
