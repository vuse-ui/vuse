export const type = ['text', 'password'];
export const size = ['mini', 'compact', 'default', 'large'];
export const inputProps = {
  type: {
    type: String,
    validator(value: string) {
      return type.includes(value);
    },
    default: 'text',
  },
  size: {
    type: String,
    validator(value: string) {
      return size.includes(value);
    },
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Controlled Input',
  },
  error: {
    type: Boolean,
    default: false,
  },
  positive: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
};
export const Emits = ['update:modelValue', 'focus', 'blur', 'change', 'input', 'clear'];
