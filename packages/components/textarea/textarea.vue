<template>
  <div class="v-textarea" :class="classList">
    <textarea
      rows="3"
      @focus="handleFocus"
      @blur="handleBlur"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="props.disabled"
      :readonly="props.readonly"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts" name="VTextarea">
import { computed, ref, toRef } from 'vue';
import { Props, Emits } from './props';
import './textarea.scss';

const props = defineProps(Props);
const emits = defineEmits(Emits);
const classList = computed(() => {
  return [
    {
      [`v-textarea-${props.size}`]: props.size,
      ['v-textarea-focus']: focused.value,
      ['v-textarea-error']: props.error,
      ['v-textarea-positive']: props.positive,
      ['v-textarea-disabled']: props.disabled,
    },
  ];
});
const focused = ref(false);
const modelValue = toRef(props, 'modelValue');
const placeholder = toRef(props, 'placeholder');

const handleFocus = () => {
  focused.value = true;
};
const handleBlur = () => {
  focused.value = false;
};
const handleInput = (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<style scoped></style>
