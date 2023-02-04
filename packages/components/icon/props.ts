import { ExtractPropTypes } from 'vue';

export const Props = {
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 64,
  },
  title: {
    type: String,
  },
  color: {
    type: String,
    default: 'black',
  },
};

export type ButtonProps = ExtractPropTypes<typeof Props>;
