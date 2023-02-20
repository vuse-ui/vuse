<template>
  <div style="display: flex; flex-direction: column; gap: 5px">
    <v-select size="default" type="select" :options="options" />
    <v-select size="default" type="search" :options="options" />
  </div>
</template>

<script setup lang="ts">
const options = ['mini', 'compact', 'default', 'large'];
</script>
