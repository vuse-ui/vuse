interface ColumnProps {
  dataIndex: string;
  title: string;
  key?: string;
  width?: number | string;
  fixed?: boolean | 'left' | 'right';
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
  height: {
    type: [Number, String],
  },
  scrollWidth: {
    type: [Number, String],
  },
};
