<template>
  <v-table bordered :dataSource="dataSource" :columns="columns">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span style="display: flex">
          <v-avatar src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy" size="16px" />
          Name
        </span>
      </template>
    </template>
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex === 'address'">
        <v-link style="color: red">{{ text }}</v-link>
      </template>
      <template v-if="column.dataIndex === 'operation'">
        <v-button size="mini" type="primary" @click="deleteFn(record.key)">delete</v-button>
      </template>
    </template>
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
    title: 'Operation',
    dataIndex: 'operation',
    key: 'operation',
  },
];
const deleteFn = (key: string) => {
  alert(key);
};
</script>
