<template>
  <h4 :style="{ margin: '16px 0' }">Use Attribute</h4>
  <v-list bordered header="header" footer="footer">
    <v-list-item v-for="(item, index) in data" :key="index">
      {{ item.title }}
    </v-list-item>
  </v-list>
  <h4 :style="{ margin: '16px 0' }">Use Slot</h4>
  <v-list bordered>
    <v-list-item v-for="(item, index) in data" :key="index">
      {{ item.title }}
    </v-list-item>
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
