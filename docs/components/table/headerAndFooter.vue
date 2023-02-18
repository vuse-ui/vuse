<template>
  <v-table bordered :dataSource="dataSource" :columns="columns">
    <template #header>
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <v-avatar name="Eobard Thawne" size="32px" />
        <span :style="{ marginLeft: '15px' }"> Header</span>
      </div>
    </template>
    <template #footer>
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <v-avatar name="Eobard Thawne" size="32px" />
        <span :style="{ marginLeft: '15px' }"> Footer</span>
      </div>
    </template>
  </v-table>
</template>
<script setup lang="ts">
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
  },
];
</script>
