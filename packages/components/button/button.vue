<template>
  <button
    type="button"
    class="v-button"
    :class="classList"
    :disabled="disabled || loading"
    :loading="loading"
    @click="handlerClick"
  >
    <!-- TODO: Icon组件完成后，把loading完成 -->
    <slot></slot>
  </button>
</template>

<script setup lang="ts" name="VButton">
import { computed } from 'vue';

import './button.scss';
import { buttonProps, Emits } from './props';

const props = defineProps(buttonProps);
const emits = defineEmits(Emits);
const classList = computed(() => {
  const { type, size, shape } = props;
  return [
    {
      [`v-button-${type}`]: type,
      [`v-button-${size}`]: size,
      [`v-button-${shape}`]: shape,
    },
  ];
});
const handlerClick = (evt: MouseEvent): void => {
  emits('click', evt);
};
</script>

<style scoped></style>
