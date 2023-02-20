<template>
  <div style="display: flex; flex-direction: column; gap: 5px">
    <v-select size="mini" :options="options" />
    <v-select size="compact" :options="options" />
    <v-select size="default" :options="options" />
    <v-select size="large" :options="options" />
  </div>
</template>

<script setup>
const options = ['mini', 'compact', 'default', 'large'];
</script>
