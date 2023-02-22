export const sizeOption = ['small', 'normal', 'large'];
export const stepMax = 10;
export const valueMax = 100;
export const theme = ['basic', 'important', 'positive'];
export const progressProps = {
  size: {
    type: String,
    validator(value: string) {
      return sizeOption.includes(value);
    },
    default: 'normal',
  },
  step: {
    type: String,
    validator(value: string) {
      return Number(value) <= stepMax && Number(value) >= 1;
    },
    default: 1,
  },
  value: {
    type: Number,
    validator(value: string) {
      return Number(value) <= valueMax && Number(value) >= 0;
    },
    default: 50,
  },
  label: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String,
    validator(value: string) {
      return theme.includes(value);
    },
    default: 'basic',
  },
};
