import { type ExtractPropTypes } from 'vue';
export const type = ['primary', 'secondary', 'tertiary'];
export const size = ['mini', 'compact', 'default', 'large'];
export const shape = ['default', 'pill', 'round', 'circle', 'square'];
export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return type.includes(value);
    },
  },
  size: {
    type: String,
    validator(value: string) {
      return size.includes(value);
    },
    default: 'default',
  },
  shape: {
    type: String,
    validator(value: string) {
      return shape.includes(value);
    },
  },
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
