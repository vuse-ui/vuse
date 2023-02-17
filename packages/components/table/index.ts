import type { App } from 'vue';
import Table from './table.vue';

export { Table };
export default {
  title: 'Table 表格',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Table.name, Table);
  },
};
