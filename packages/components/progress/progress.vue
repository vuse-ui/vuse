<template>
  <div :class="classList">
    <div class="container" ref="container">
      <div
        class="progress-bar"
        :size="props.size"
        :step="props.step"
        :value="props.value"
        v-for="count in stepValid()"
        :key="count"
      >
        <div :theme="props.theme" :class="classListBar"></div>
      </div>
    </div>
    <p class="label" v-show="showLabel">{{ Number(showValue).toFixed(0) }}% Loaded</p>
    <p class="error-msg">{{ showError }}</p>
  </div>
</template>

<script lang="ts" setup name="VProgress">
import './progress.scss';
import { progressProps } from './props';
import { ref, computed, nextTick, watchEffect } from 'vue';

//接受传参
const props = defineProps(progressProps);
const showError = ref('');
const showLabel = ref(props.label);
const showValue = ref(props.value);
const container = ref<null | HTMLElement>(null);
//定义动画(不优雅，后期修改)
const simulateAnimation = () => {
  const stepNum = stepValid();
  showValue.value = Number(showValue.value);
  if (stepNum === 1) {
    nextTick(() => {
      if (container.value) {
        (container.value.children[0].children[0] as HTMLElement).style.transform = `translateX(-${
          100 - showValue.value
        }%)`;
      }
      const time = setInterval(() => {
        if (time) clearInterval(time);
        if (showValue.value >= 100) showValue.value = Number(props.value);
        showValue.value += 0.3;
      }, 20);
    });
    return;
  }
  const startNum = Math.floor((showValue.value / 100) * stepNum);
  for (let i = 0; i < startNum; i++) {
    nextTick(() => {
      if (container.value) {
        (container.value.children[i].children[0] as HTMLElement).style.transform = 'translateX(0)';
      }
    });
  }
  for (let j = startNum; j < startNum + 1 && j < stepNum; j++) {
    nextTick(() => {
      if (container.value) {
        (container.value.children[j].children[0] as HTMLElement).style.animationName = 'progressing';
      }
    });
  }
};
//开始动画
nextTick(() => {
  watchEffect(() => {
    simulateAnimation();
  });
});
//判断step是否合法值，成功后传给vstep
const stepValid = (): number => {
  const isValid = progressProps.step.validator(props.step);
  if (!isValid) {
    showError.value = '!Error: You cannot set step over 10 or below 1';
    return 10;
  } else {
    return Number(props.step);
  }
};
const classList = computed(() => {
  return [
    'v-progress',
    {
      [`v-progress-${props.size}`]: props.size,
    },
  ];
});
const classListBar = computed(() => {
  return [
    'bar-animate',
    {
      [`bar-animate-${props.theme}`]: props.theme,
    },
  ];
});
</script>

<style scoped></style>
