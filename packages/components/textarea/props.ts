import { ExtractPropTypes } from 'vue';

export const size = ['mini', 'compact', 'default', 'large'];

export const Props = {
  modelValue: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  positive: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator(value: string) {
      return size.includes(value);
    },
    default: 'default',
  },
  placeholder: {
    type: String,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  clearOnEscape: {
    // 聚焦时，按Esc清空value
    type: Boolean,
    default: false,
  },
};

export const Emits = {
  'update:modelValue': (value: string) => value,
};

export type NotificationProps = ExtractPropTypes<typeof Props>;
