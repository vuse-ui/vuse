<template>
  <Transition>
    <div v-if="visible" class="v-notification" :class="classList">
      <slot />
      <svg viewBox="0 0 24 24" width="1rem" height="1rem" cursor="pointer" @click="handleClose">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289Z"
        />
      </svg>
    </div>
  </Transition>
</template>

<script setup lang="ts" name="VNotification">
import { computed, ref } from 'vue';
import { Props, Emits } from './props';
import './notification.scss';

// 关闭按钮就是DeleteIcon，但希望每个组件都能独立运行，暂时这么写着
const props = defineProps(Props);
const emits = defineEmits(Emits);
const classList = computed(() => {
  const { kind } = props;
  return [
    {
      [`v-notification-${kind}`]: kind,
    },
  ];
});
const visible = ref(true);
const handleClose = (ev: MouseEvent): void => {
  visible.value = false;
  emits('close', ev);
};
</script>

<style scoped>
.v-leave-to {
  opacity: 0;
}

.v-leave-active {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: all;
  transition-duration: 200ms;
}
</style>
