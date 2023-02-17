<template>
  <div class="v-table" :class="classList">
    <div class="v-table-header" v-if="slotHeader">
      <slot name="header"></slot>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">
            <slot name="headerCell" :column="col">
              {{ col.title }}
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in dataSource" :key="index">
          <td v-for="col in columns" :key="index + col.key">
            <slot name="bodyCell" :column="col" :text="(data as any)[col.key]" :record="data">
              {{ (data as any)[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="v-table-footer" v-if="slotFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="VTable">
import { computed, useSlots } from 'vue';
import './table.scss';
import { tableProps } from './props';

const slotHeader = !!useSlots().header;
const slotFooter = !!useSlots().footer;

const props = defineProps(tableProps);
const classList = computed(() => {
  const { bordered } = props;
  return [
    {
      ['v-table-bordered']: bordered,
    },
  ];
});
</script>
