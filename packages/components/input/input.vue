<template>
  <div :class="classList">
    <input
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      v-bind="$attrs"
      :type="props.type"
      :value="inputValue"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :readonly="props.readonly"
    />
    <v-icon
      v-if="inputValue && props.clearable && !props.readonly && !props.disabled"
      class="v-input-icon"
      name="delete-alt"
      title="Delete"
      :size="iconSize"
      @click="handleClear"
    />
  </div>
</template>

<script setup lang="ts" name="VInput">
import './input.scss';
import { computed, toRef, ref, watchEffect } from 'vue';
import { inputProps, Emits } from './props';

const props = defineProps(inputProps);
const emits = defineEmits(Emits);
const iconSizeMap: { [n: string]: number } = {
  mini: 14,
  compact: 14,
  default: 16,
  large: 22,
};
const iconSize = computed(() => iconSizeMap[props.size]);
const classList = computed(() => {
  return [
    'v-input',
    {
      [`v-input-${props.size}`]: props.size,
      ['v-input-error']: props.error,
      ['v-input-positive']: props.positive,
      ['v-input-disabled']: props.disabled,
    },
  ];
});

// inputValue 是为了在 v-input 没有绑定 v-model 属性的情况下依然能 handleClear 清空文本框
const modelValue = toRef(props, 'modelValue');
const inputValue = ref('');

watchEffect(() => {
  inputValue.value = modelValue.value;
});

const handleInput = (e: Event) => {
  const val = (e.target as HTMLInputElement).value;
  inputValue.value = val;
  emits('update:modelValue', val);
  emits('input', val);
};
const handleFocus = (e: FocusEvent) => {
  emits('focus', e);
};
const handleBlur = (e: FocusEvent) => {
  emits('blur', e);
};
const handleChange = (e: Event) => {
  const val = (e.target as HTMLInputElement).value;
  emits('change', val);
};
const handleClear = () => {
  inputValue.value = '';
  emits('update:modelValue', '');
  emits('clear');
};
</script>
<style lang="scss" scoped></style>
