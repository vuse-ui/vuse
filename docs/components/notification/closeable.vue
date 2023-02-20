<template>
  <div style="display: flex; flex-direction: column; gap: 1rem">
    <v-notification kind="info" closeable>Info notification</v-notification>
    <v-notification kind="positive" closeable>Positive notification</v-notification>
    <v-notification kind="warning" closeable>Warning notification</v-notification>
    <h4 :style="{ margin: '16px 0' }">Close Event</h4>
    <v-notification kind="negative" closeable @close="close">Negative notification</v-notification>
  </div>
</template>
<script setup>
const close = e => {
  console.log(e);
  alert('close！');
};
</script>
