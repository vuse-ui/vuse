<template>
  <h4 :style="{ margin: '16px 0' }">Mini Size</h4>
  <v-list bordered size="mini">
    <v-list-item v-for="(item, index) in data" :key="index">
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <v-avatar name="Eobard Thawne" size="32px" />
        <span :style="{ marginLeft: '15px' }"> {{ item.title }}</span>
      </div>
    </v-list-item>
  </v-list>

  <h4 :style="{ margin: '16px 0' }">Default Size</h4>
  <v-list bordered>
    <v-list-item v-for="(item, index) in data" :key="index">
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <v-avatar name="Eobard Thawne" size="32px" />
        <span :style="{ marginLeft: '15px' }"> {{ item.title }}</span>
      </div>
    </v-list-item>
  </v-list>

  <h4 :style="{ margin: '16px 0' }">Large Size</h4>
  <v-list bordered size="large">
    <v-list-item v-for="(item, index) in data" :key="index">
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <v-avatar name="Eobard Thawne" size="32px" />
        <span :style="{ marginLeft: '15px' }"> {{ item.title }}</span>
      </div>
    </v-list-item>
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
