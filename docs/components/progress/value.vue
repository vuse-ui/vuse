<template>
  <div>
    <v-progress :value="num" label></v-progress>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
const num: Ref<number> = ref(20);
//模拟进度数值变化
setInterval(() => {
  if (num.value >= 99.99) num.value = 20;
  num.value += 0.1;
}, 20);
</script>
