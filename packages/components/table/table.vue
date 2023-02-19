<template>
  <div class="v-table" :class="classList">
    <div class="v-table-header" v-if="slotHeader">
      <slot name="header"></slot>
    </div>
    <div class="v-table-container">
      <div v-if="height" class="v-table-thead">
        <table>
          <colgroup>
            <col
              v-for="(col, i) in columns"
              :key="(col.key || col.dataIndex) + i"
              :style="{ width: typeof col.width === 'number' ? col.width + 'px' : col.width }"
            />
            <col :style="{ width: scrollbarWidth + 'px' }" />
          </colgroup>
          <thead>
            <tr>
              <th v-for="(col, i) in columns" :key="(col.key || col.dataIndex) + i">
                <slot name="headerCell" :column="col">
                  {{ col.title }}
                </slot>
              </th>
              <th class="v-table-cell-scrollbar"></th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        v-if="height"
        class="v-table-body"
        :style="{ maxHeight: typeof height === 'number' ? height + 'px' : height }"
        ref="tableBodyContainer"
      >
        <table ref="tableBodyContent">
          <colgroup>
            <col
              v-for="(col, i) in columns"
              :key="(col.key || col.dataIndex) + i"
              :style="{ width: typeof col.width === 'number' ? col.width + 'px' : col.width }"
            />
          </colgroup>
          <tbody>
            <tr v-for="(data, index) in dataSource" :key="(data as object).toString() + index">
              <td v-for="(col, i) in columns" :key="(col.key || col.dataIndex) + i + index">
                <slot name="bodyCell" :column="col" :text="(data as any)[col.dataIndex]" :record="data">
                  {{ (data as any)[col.dataIndex] }}
                </slot>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        v-if="!height"
        class="v-table-content"
        :style="{ width: typeof scrollWidth === 'number' ? scrollWidth + 'px' : scrollWidth, minWidth: '100%' }"
      >
        <table>
          <colgroup>
            <col
              v-for="(col, i) in columns"
              :key="(col.key || col.dataIndex) + i"
              :style="{ width: typeof col.width === 'number' ? col.width + 'px' : col.width }"
            />
          </colgroup>
          <thead>
            <tr>
              <th
                v-for="(col, i) in columns"
                :key="(col.key || col.dataIndex) + i"
                :style="stickyStyleObject(col.fixed)"
                :class="{ sticky: col.fixed }"
              >
                <slot name="headerCell" :column="col">
                  {{ col.title }}
                </slot>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in dataSource" :key="(data as object).toString() + index">
              <td
                v-for="(col, i) in columns"
                :key="(col.key || col.dataIndex) + i + index"
                :style="stickyStyleObject(col.fixed)"
                :class="{ sticky: col.fixed }"
              >
                <slot name="bodyCell" :column="col" :text="(data as any)[col.dataIndex]" :record="data">
                  {{ (data as any)[col.dataIndex] }}
                </slot>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="v-table-footer" v-if="slotFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="VTable">
import { computed, useSlots, ref, watch } from 'vue';
import './table.scss';
import { tableProps } from './props';

const slotHeader = !!useSlots().header;
const slotFooter = !!useSlots().footer;

const tableBodyContainer = ref<null | HTMLElement>(null);
const tableBodyContent = ref<null | HTMLElement>(null);
const scrollbarWidth = ref<number>(0);
const fixedColumn = ref<boolean>(false);
watch([tableBodyContainer, tableBodyContent], ([container, content]) => {
  if (container && content) {
    scrollbarWidth.value = container.offsetWidth - content.offsetWidth;
  }
});

const props = defineProps(tableProps);
const classList = computed(() => {
  const { bordered, height } = props;
  return [
    {
      ['v-table-bordered']: bordered,
      ['v-table-fixed-header']: height,
      ['v-table-fixed-column']: fixedColumn,
    },
  ];
});

const stickyStyleObject = (fixed?: boolean | 'left' | 'right') => {
  if (!fixed) {
    return;
  }
  fixedColumn.value = true;
  if (typeof fixed === 'boolean') {
    fixed = 'left';
  }
  return {
    [`${fixed}`]: 0,
  };
};
</script>
