import type { App } from 'vue';
import Upload from './upload.vue';

export { Upload };
export default {
  title: 'Upload 文件上传',
  category: 'Upload',
  status: '20%',
  install(app: App): void {
    app.component(Upload.name, Upload);
  },
};
