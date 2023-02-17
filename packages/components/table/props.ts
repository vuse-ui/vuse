interface ColumnProps {
  dataIndex: string;
  title: string;
  key: string;
}

export const tableProps = {
  dataSource: {
    type: Array,
  },
  columns: {
    type: Array<ColumnProps>,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
};
