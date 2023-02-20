<template>
  <v-select @blur="num++" />
  <p>Blur Times: {{ num }}</p>
</template>
<script setup>
import { ref } from 'vue';
const num = ref(0);
</script>
