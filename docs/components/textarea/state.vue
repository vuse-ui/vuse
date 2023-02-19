<template>
  <v-textarea positive placeholder="Controlled Input" v-model="content.positive" />
  <v-textarea error placeholder="Controlled Input" v-model="content.error" />
  <v-textarea disabled placeholder="Controlled Input" v-model="content.disabled" />
  <v-textarea readonly placeholder="Controlled Input" v-model="content.readonly" />
</template>

<script setup lang="ts">
const content = {
  positive: 'Positive textarea',
  error: 'Error textarea',
  disabled: 'Disabled textarea',
  readonly: 'Readonly textarea',
};
</script>
