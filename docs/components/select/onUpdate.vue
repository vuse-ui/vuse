<template>
  <v-select v-model="value" />
  <p>v-model: {{ value }}</p>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('default');
</script>
