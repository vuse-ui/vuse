import type { App } from 'vue';
import { VuseOptions } from '../utils/types';
import Table from './table.vue';

export { Table };
export default {
  title: 'Table 表格',
  category: '通用',
  status: '100%',
  install(app: App, options: VuseOptions): void {
    const componentPrefix = options?.componentPrefix ?? 'V';
    app.component(componentPrefix + Table.name, Table);
  },
};
