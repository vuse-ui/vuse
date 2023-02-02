<template>
  <button type="button" class="v-button" :class="classList">
    <slot>{{ props.size }}</slot>
  </button>
</template>

<script setup lang="ts" name="VButton">
import { computed } from 'vue';

import './button.scss';
import { buttonProps } from './props';

const props = defineProps(buttonProps);
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
</script>

<style scoped></style>
