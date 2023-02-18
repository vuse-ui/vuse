<template>
  <v-table height="240px" bordered :dataSource="dataSource" :columns="columns"> </v-table>
</template>
<script setup lang="ts">
const dataSource = [...Array(10)].map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150, // 🚨 Specify width of columns
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 150, // 🚨 Specify width of columns
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
</script>
