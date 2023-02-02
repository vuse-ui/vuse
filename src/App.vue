<template>
  <div style="display: flex; flex-direction: column">
    <div>Buttons:</div>
    <div class="btn-demo">
      <span>Size </span>
      <v-button size="mini" type="primary" />
      <v-button size="compact" type="primary" />
      <v-button size="default" type="primary" />
      <v-button size="large" type="primary" />
    </div>
    <div class="btn-demo">
      <span>Kind </span>
      <v-button type="primary">Primary</v-button>
      <v-button type="secondary">Secondary</v-button>
      <v-button type="tertiary">Tertiary</v-button>
    </div>
    <div class="btn-demo">
      <span>Shape </span>
      <v-button shape="default">Default</v-button>
      <v-button shape="default">Pill</v-button>
      <v-button shape="default">Round</v-button>
      <v-button shape="default">Circle</v-button>
      <v-button shape="default">Square</v-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.btn-demo * {
  margin-right: 10px;
}
</style>
