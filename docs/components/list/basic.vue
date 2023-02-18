<template>
  <v-list>
    <v-list-item v-for="(item, index) in data" :key="index">{{ item.title }}</v-list-item>
  </v-list>
</template>
<script setup lang="ts">
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Vuse Title 1',
  },
  {
    title: 'Vuse Title 2',
  },
  {
    title: 'Vuse Title 3',
  },
  {
    title: 'Vuse Title 4',
  },
];
</script>
