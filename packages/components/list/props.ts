export const size = ['mini', 'default', 'large'];
export const listProps = {
  size: {
    type: String,
    validator(value: string) {
      return size.includes(value);
    },
    default: 'default',
  },
  header: {
    type: String,
    default: '',
  },
  footer: {
    type: String,
    default: '',
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  emptyText: {
    type: String,
    default: 'No data',
  },
};
