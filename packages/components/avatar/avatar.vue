<template>
  <div class="v-avatar" :class="classList" :style="{ width: props.size, height: props.size }">
    <img
      v-show="loaded"
      alt="props.name"
      :src="props.src"
      @load="handleLoad"
      @error="handleError"
      :width="props.size"
      :height="props.size"
    />
    <span v-show="!loaded">{{ getInitials(props.name) }}</span>
  </div>
</template>

<script setup lang="ts" name="Avatar">
import { computed, ref } from 'vue';

import './avatar.scss';
import { Props } from './props';

const props = defineProps(Props);
const loaded = ref(false);
const classList = computed(() => {
  return [
    {
      ['v-avatar-loaded']: loaded.value,
    },
  ];
});

const getInitials = (name?: string) => {
  if (!name) return '';
  const words = name.split(' ');
  const initials = words.map(word => word[0]);
  return initials.slice(0, 2).join('').toUpperCase();
};

const handleLoad = () => {
  loaded.value = true;
};
const handleError = () => {
  loaded.value = false;
};
</script>
