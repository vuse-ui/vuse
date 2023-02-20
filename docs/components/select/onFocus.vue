<template>
  <v-input size="default" type="text" value="text" @focus="num++" />
  <p>Focus Times: {{ num }}</p>
</template>
<script setup>
import { ref } from 'vue';
const num = ref(0);
</script>
