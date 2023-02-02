<template>
  <div class="v-notification" :class="classList">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="VNotification">
import { computed } from 'vue';
import { Props } from './props';
import './notification.scss';

const props = defineProps(Props);
const classList = computed(() => {
  const { kind } = props;
  return [
    {
      [`v-notification-${kind}`]: kind,
    },
  ];
});
</script>

<style scoped></style>
