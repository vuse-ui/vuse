<template>
  <div style="display: flex; flex-direction: column; gap: 5px">
    <v-select
      v-for="(val, key) in features"
      v-bind="{ [key]: val }"
      :key="key"
      :options="options"
      :placeholder="`${key} select`"
    />
  </div>
</template>

<script setup lang="ts">
const options = ['mini', 'compact', 'default', 'large'];

const features = {
  error: true,
  positive: true,
  disabled: true,
  readonly: true,
  clearable: true,
  loading: true,
  autoFocus: true,
  searchable: true,
};
</script>
