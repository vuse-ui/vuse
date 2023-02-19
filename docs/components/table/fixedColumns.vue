<template>
  <v-table :scrollWidth="2000" bordered :dataSource="dataSource" :columns="columnsFixed"> </v-table>
</template>
<script setup lang="ts">
interface ColumnProps {
  dataIndex?: string;
  title: string;
  key: string;
  width?: number | string;
  fixed?: boolean | string;
}
const dataSource = [...Array(4)].map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

const columnsFixed: Array<ColumnProps> = [
  { title: 'Full Name', width: 200, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 50, dataIndex: 'age', key: 'age' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8', fixed: 'right' },
];
</script>
