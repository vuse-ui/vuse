import { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Button from './button.vue';

// https://cn.vuejs.org/guide/reusability/plugins.html#introduction
// 根据官方文档，一个插件可以是一个拥有 install() 方法的对象
export { Button };
export default {
  title: 'Button 按钮',
  category: '通用',
  status: '100%',
  install(app: App, options?: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Button.name, Button);
  },
};
