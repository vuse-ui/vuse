<template>
  <v-select @input="val => (value = val)" />
  <p>value: {{ value }}</p>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
