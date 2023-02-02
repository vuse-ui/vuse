<template>
  <div style="display: flex; flex-direction: column">
    <div class="title">Buttons:</div>
    <div class="btn-demo">
      <span>Size </span>
      <v-button size="mini" type="primary">Mini</v-button>
      <v-button size="compact" type="primary">Compact</v-button>
      <v-button size="default" type="primary">Default</v-button>
      <v-button size="large" type="primary">Large</v-button>
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
    <div class="btn-demo">
      <span>Disabled </span>
      <v-button disabled>Disabled</v-button>
    </div>
    <div class="btn-demo">
      <span>Loading </span>
      <v-button loading>Loading</v-button>
    </div>
    <div class="btn-demo">
      <span>Click </span>
      <v-button @click="greeting">Click me</v-button>
    </div>

    <div class="title">Notifications:</div>
    <div class="notification-demo">
      <v-notification kind="info">Info notification</v-notification>
      <v-notification kind="positive">Positive notification</v-notification>
      <v-notification kind="warning">Warning notification</v-notification>
      <v-notification kind="negative">Negative notification</v-notification>
    </div>
  </div>
</template>

<script setup lang="ts">
const greeting = () => {
  alert('Clicked!');
};
</script>

<style scoped>
.title {
  margin: 0.5rem 0;
}
.btn-demo * {
  margin-right: 10px;
  margin-bottom: 5px;
}
.notification-demo {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
