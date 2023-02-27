<template>
  <div class="v-list" :class="classList">
    <div class="v-list-header" v-if="props.header || slotHeader">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="v-list-items">
      <slot>
        <div class="v-list-empty">{{ emptyText }}</div></slot
      >
    </div>
    <div class="v-list-footer" v-if="props.footer || slotFooter">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="List">
import { computed, useSlots } from 'vue';

import './list.scss';
import { listProps } from './props';

const props = defineProps(listProps);
const slotHeader = !!useSlots().header;
const slotFooter = !!useSlots().footer;

const classList = computed(() => {
  const { size, bordered } = props;
  return [
    {
      [`v-list-${size}`]: size,
      ['v-list-bordered']: bordered,
    },
  ];
});
</script>
