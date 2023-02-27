import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Progress from './progress.vue';

export { Progress };
export default {
  title: 'Progress 进度条',
  category: 'Progress',
  status: '80%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Progress.name, Progress);
  },
};
