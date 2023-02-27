<template>
  <component
    :is="isURL(props.name) ? 'img' : 'svg'"
    class="v-icon"
    :class="classList"
    aria-hidden="true"
    :style="innerStyle"
  >
    <title>{{ props.title }}</title>
    <use :xlink:href="symbolId" :fill="props.color" />
    <slot />
  </component>
</template>

<script setup lang="ts" name="Icon">
import { computed, CSSProperties } from 'vue';
import { Props } from './props';

const props = defineProps(Props);
const isURL = (val: string | undefined | null) => {
  if (!val) {
    return false;
  }
  return /^(http)|(\.*\/)/.test(val);
};
const classList = computed(() => {
  const { name, size, color } = props;
  return [
    {
      [`v-icon-${name}`]: name,
      [`v-icon-${size}`]: size,
      [`v-icon-${color}`]: color,
    },
  ];
});
const innerStyle = computed(() => {
  const styles: CSSProperties = {};
  if (props.size) {
    styles.width = `${props.size}px`;
    styles.height = `${props.size}px`;
  }
  return styles;
});
const symbolId = computed(() => `#${props.name}`);
</script>

<style scoped></style>
