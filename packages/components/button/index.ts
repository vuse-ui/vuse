import { App } from 'vue';
import Button from './button.vue';

// https://cn.vuejs.org/guide/reusability/plugins.html#introduction
// 根据官方文档，一个插件可以是一个拥有 install() 方法的对象
export { Button };
export default {
  title: 'Button 按钮',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Button.name, Button);
  },
};
