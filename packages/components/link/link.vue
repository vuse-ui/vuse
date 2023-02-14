<template>
  <a :href="props.href" :class="classList">
    <slot></slot>
  </a>
</template>

<script setup lang="ts" name="VLink">
import './link.scss';
import { computed } from 'vue';
import { linkProps } from './props';
const props = defineProps(linkProps);
const classList = computed(() => [
  'v-link',
  {
    'v-link-underLine': props.underLine,
    'v-link-animateUnderline': props.underLine && props.animateUnderline,
  },
]);
</script>
<style lang="scss" scoped></style>
