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
    <p class="label" v-show="showLabel">{{ Math.ceil(props.value / 10) * 10 }}% Loaded</p>
    <p class="error-msg">{{ showError }}</p>
  </div>
</template>

<script lang="ts" setup name="Progress">
import './progress.scss';
import { progressProps } from './props';
import { ref, computed, nextTick, watch, onMounted } from 'vue';

//接受传参
const props = defineProps(progressProps);
const showError = ref('');
const showLabel = ref(props.label);
const showValue = ref(props.value);
const container = ref<null | HTMLElement>(null);
//定义动画，监听value值发生变化执行动画。
watch(
  props,
  newValue => {
    nextTick(() => {
      if (container.value) {
        domAnimatinNode(container.value as HTMLElement, newValue.value);
      }
    });
  },
  { deep: true }
);
onMounted(() => {
  domAnimatinNode(container.value as HTMLElement, showValue.value);
});
//dom节点动画更新
const domAnimatinNode = (container: HTMLElement, value: number) => {
  const stepNum = stepValid();
  if (stepNum === 1 && container) {
    return ((container.children[0].children[0] as HTMLElement).style.transform = `translateX(-${100 - value}%)`);
  }
  if (stepNum > 1 && container) {
    const startNum = Math.floor((value / 100) * stepNum);
    (container.children[startNum].children[0] as HTMLElement).classList.add('progressing');
    (container.children[startNum].children[0] as HTMLElement).classList.remove('full-bar');
    (container.children[startNum].children[0] as HTMLElement).classList.remove('empty-bar');
    for (let i = 0; i < startNum; i++) {
      (container.children[i].children[0] as HTMLElement).classList.add('full-bar');
      (container.children[i].children[0] as HTMLElement).classList.remove('progressing');
      (container.children[i].children[0] as HTMLElement).classList.remove('empty-bar');
    }
    for (let j = startNum + 1; j < stepNum; j++) {
      (container.children[j].children[0] as HTMLElement).classList.add('empty-bar');
      (container.children[j].children[0] as HTMLElement).classList.remove('progressing');
      (container.children[j].children[0] as HTMLElement).classList.remove('full-bar');
    }
  }
};
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
