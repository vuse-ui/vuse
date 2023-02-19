export const style = ['basic', 'important', 'positive'];
export const size = ['small', 'normal', 'large'];
export const uploadProps = {
  vstyle: {
    type: String,
    validator(value: string) {
      return style.includes(value);
    },
    default: 'basic',
  },
  size: {
    type: String,
    validator(value: string) {
      return size.includes(value);
    },
    default: 'normal',
  },
  accept: {
    type: String,
    default: '*',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  maxSize: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER,
  },
  minSize: {
    type: Number,
    default: 0,
  },
  error: {
    type: Boolean,
    default: false,
  },
};
