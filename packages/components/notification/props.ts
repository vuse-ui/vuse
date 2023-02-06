import { ExtractPropTypes } from 'vue';

export const kind = ['info', 'positive', 'warning', 'negative'];

export const Props = {
  kind: {
    type: String,
    validator(value: string) {
      return kind.includes(value);
    },
  },
  closeable: {
    type: Boolean,
    default: false,
  },
};

export const Emits = {
  close: (evt: MouseEvent): MouseEvent => evt,
};

export type NotificationProps = ExtractPropTypes<typeof Props>;
