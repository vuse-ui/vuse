<template>
  <v-button size="mini" type="primary" style="margin-bottom: 8px" @click="handleAdd">Add</v-button>
  <v-table bordered :dataSource="dataSource" :columns="columns">
    <template #header> Custom Cell Presentation </template>
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span style="display: flex; align-items: center">
          <v-avatar src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy" size="16px" />
          Name
        </span>
      </template>
    </template>
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex === 'name'">
        <div v-if="editableData[record.key]" class="editable-cell-wrapper">
          <v-input size="mini" v-model="editableData[record.key].name" />
          <v-button size="mini" class="editable-btn" @click="save(record.key)">save</v-button>
        </div>
        <div v-else class="editable-cell-wrapper">
          {{ text || ' ' }}
          <v-button size="mini" class="editable-btn" @click="edit(record.key)">edit</v-button>
        </div>
      </template>
      <template v-if="column.dataIndex === 'address'">
        <v-link style="color: red">{{ text }}</v-link>
      </template>
      <template v-if="column.dataIndex === 'operation'">
        <v-button size="mini" type="primary" @click="onDelete(record.key)">delete</v-button>
      </template>
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
import { ref, computed, reactive } from 'vue';
import type { Ref, UnwrapRef } from 'vue';

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

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
let dataSource: Ref<DataItem[]> = ref([
  {
    key: '0',
    name: 'Edward King 0',
    age: 32,
    address: 'London, Park Lane no. 0',
  },
  {
    key: '1',
    name: 'Edward King 1',
    age: 32,
    address: 'London, Park Lane no. 1',
  },
]);
const count = computed(() => dataSource.value.length + 1);
const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

const edit = (key: string) => {
  editableData[key] = JSON.parse(JSON.stringify(dataSource.value.find(item => key === item.key)));
};
const save = (key: string) => {
  Object.assign(dataSource.value.find(item => key === item.key) as DataItem, editableData[key]);
  delete editableData[key];
};
const handleAdd = () => {
  const newData = {
    key: `${count.value}`,
    name: `Edward King ${count.value}`,
    age: 32,
    address: `London, Park Lane no. ${count.value}`,
  };
  dataSource.value.push(newData);
};

const onDelete = (key: string) => {
  dataSource.value = dataSource.value.filter(item => item.key !== key);
};
</script>
<style scoped>
.editable-cell-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.editable-btn {
  margin-left: 5px;
}
</style>
