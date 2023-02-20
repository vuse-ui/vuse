<template>
  <div style="display: flex; flex-direction: column; gap: 5px">
    <v-select v-for="val in options" :key="val" :size="val" :value="val" :options="options" />
  </div>
</template>

<script setup>
const options = ['mini', 'compact', 'default', 'large'];
</script>
