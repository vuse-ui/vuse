import { ExtractPropTypes } from 'vue'
export const type = ['primary', 'secondary', 'tertiary']
export const size = ['mini', 'compact', 'default', 'large']
export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return type.includes(value)
    }
  },
  size: {
    type: String,
    validator(value: string) {
      return size.includes(value)
    },
    default: 'default'
  }
}
export type ButtonProps = ExtractPropTypes<typeof buttonProps>