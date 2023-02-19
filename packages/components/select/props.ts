import { type ExtractPropTypes } from 'vue';
export const type = ['select', 'search'];
export const size = ['mini', 'compact', 'default', 'large'];
const labelKey = {
  type: String,
  default: 'id',
};
const valueKey = {
  type: String,
  default: 'label',
};
/* interface option {
  id: string;
  label: string;
} */

export const Props = {
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
  options: {
    type: Array<string>,
    default: ['mini', 'compact', 'default', 'large'],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  autoFocus: {
    type: Boolean,
    default: false,
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  labelKey,
  valueKey,
};
export const Emits = ['update:modelValue', 'focus', 'blur', 'change', 'input', 'clear'];

export type SelectProps = ExtractPropTypes<typeof Props>;
