<template>
  <v-select @change="val => (value = val)" :options="options" />
  <p>value: {{ value }}</p>
</template>
<script setup>
import { ref } from 'vue';
const options = ['mini', 'compact', 'default', 'large'];
const value = ref('');
</script>
