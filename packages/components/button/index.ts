import type { App } from 'vue';
import Button from './button.vue';

/* Button.install = (app: App) => {
  app.component('v-btn', Button)
}; */

// export default Button
// 很多大厂封装了withInstall方法来导出，但是我发现devUI采用如下导出方式，这样main.ts里use就不会报错
// 问题出现是由于vue + typescript导致
// TODO:
// 更优雅地解决
export { Button };
export default {
  title: 'Button 按钮',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Button.name, Button);
  },
};
