import type { App } from 'vue';
import Progress from './progress.vue';

export { Progress };
export default {
  title: 'Progress 进度条',
  category: 'Progress',
  status: '20%',
  install(app: App): void {
    app.component(Progress.name, Progress);
  },
};
