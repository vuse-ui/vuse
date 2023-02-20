import DefaultTheme from 'vitepress/theme';
import { EnhanceAppContext } from 'vitepress';
import { AntDesignContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';
import Vuse from '@vuse-ui/components';
import 'virtual:svg-icons-register';

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(Vuse);
    ctx.app.component('demo-preview', AntDesignContainer);
  },
};
