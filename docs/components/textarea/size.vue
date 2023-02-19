<template>
  <v-textarea size="mini" v-model="content.mini" />
  <v-textarea size="compact" v-model="content.compact" />
  <v-textarea size="default" v-model="content.default" />
  <v-textarea size="large" v-model="content.large" />
</template>

<script setup lang="ts">
const content = {
  mini: 'Mini textarea',
  compact: 'Compact textarea',
  default: 'Default textarea',
  large: 'Large textarea',
};
</script>
