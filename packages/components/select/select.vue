<template>
  <div :class="classList">
    <v-icon
      v-if="type == 'search'"
      class="v-select-search"
      name="search"
      title="search"
      :size="iconSize"
      @click="handleOpen"
    />
    <input
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      v-bind="$attrs"
      :type="type"
      :value="inputValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      ref="inputEl"
    />
    <v-icon
      v-if="inputValue && clearable && !readonly && !disabled && !loading"
      class="v-select-clear"
      name="delete-alt"
      title="Delete"
      :size="iconSize"
      @click="handleClear"
    />
    <span v-if="loading"></span>
    <v-icon
      v-if="type == 'select'"
      class="v-select-down"
      name="triangle-down"
      title="open"
      :size="iconSize + 6"
      @click="handleOpen"
    />
    <div class="v-select-menu">
      <ul v-show="selectOptions.length">
        <li
          v-for="option in selectOptions"
          :key="option"
          :selected="inputValue == option"
          @click="handleSelect(option)"
        >
          {{ option }}
        </li>
      </ul>
      <p v-show="!selectOptions.length">No results</p>
    </div>
  </div>
</template>

<script setup lang="ts" name="Select">
import './select.scss';
import { computed, ref, watchEffect } from 'vue';
import { Props, Emits } from './props';

const props = defineProps(Props);
const emits = defineEmits(Emits);

const inputEl = ref<HTMLInputElement>();
const iconSizeMap: { [n: string]: number } = {
  mini: 14,
  compact: 14,
  default: 16,
  large: 22,
};
const iconSize = computed(() => iconSizeMap[props.size]);
const classList = computed(() => {
  return [
    'v-select',
    {
      [`v-select-${props.size}`]: props.size,
      ['v-select-error']: props.error,
      ['v-select-positive']: props.positive,
      ['v-select-disabled']: props.disabled,
      [`v-button-loading`]: props.loading,
    },
  ];
});

// inputValue 是为了在没有绑定 v-model 属性的情况下依然能 handleClear 清空文本框
const inputValue = ref();
watchEffect(() => {
  const { modelValue, value } = props;
  inputValue.value = modelValue ?? value ?? '';
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
const handleSelect = (val: string) => {
  inputValue.value = val;
  emits('update:modelValue', val);
  emits('change', val);
};
const handleOpen = () => {
  inputEl.value?.focus();
};
// if autoFocus is True
watchEffect(() => {
  props.autoFocus && inputEl?.value?.focus();
});
const selectOptions = computed(() =>
  props.searchable && inputValue.value
    ? props.options.filter(option => option.includes(inputValue.value))
    : props.options
);
</script>
<style lang="scss" scoped></style>
