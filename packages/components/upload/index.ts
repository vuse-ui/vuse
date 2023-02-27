import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Upload from './upload.vue';

export { Upload };
export default {
  title: 'Upload 文件上传',
  category: 'Upload',
  status: '20%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Upload.name, Upload);
  },
};
