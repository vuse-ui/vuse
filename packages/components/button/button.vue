<template>
  <button
    type="button"
    class="v-button"
    :class="classList"
    :disabled="disabled"
    :loading="loading"
    @click="handlerClick"
  >
    <div name="slot"><slot></slot></div>
    <span v-if="loading"></span>
  </button>
</template>

<script setup lang="ts" name="VButton">
import { computed } from 'vue';

import './button.scss';
import { buttonProps, Emits } from './props';

const props = defineProps(buttonProps);
const emits = defineEmits(Emits);
const classList = computed(() => {
  const { type, size, shape, loading } = props;
  return [
    {
      [`v-button-${type}`]: type,
      [`v-button-${size}`]: size,
      [`v-button-${size}-${shape}`]: shape,
      [`v-button-loading`]: loading,
    },
  ];
});
const handlerClick = (evt: MouseEvent): void => {
  emits('click', evt);
};
</script>

<style scoped></style>
