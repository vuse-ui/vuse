<template>
  <div style="display: flex; flex-direction: column; gap: 5px">
    <v-input positive placeholder="Controlled Input" v-model="content.positive" />
    <v-input error placeholder="Controlled Input" v-model="content.error" />
    <v-input disabled placeholder="Controlled Input" v-model="content.disabled" />
    <v-input readonly placeholder="Controlled Input" v-model="content.readonly" />
    <v-input clearable placeholder="Controlled Input" v-model="content.clearable" />
  </div>
</template>

<script setup lang="ts">
const content = {
  positive: 'Positive input',
  error: 'Error input',
  disabled: 'Disabled input',
  readonly: 'Readonly input',
  clearable: 'Clearable input',
};
</script>
