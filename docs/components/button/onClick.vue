<template>
  <v-button @click="greeting">Click me</v-button>
</template>

<script setup>
const greeting = () => alert('Hello');
</script>
