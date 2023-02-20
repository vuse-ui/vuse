<template>
  <div class="icon-container">
    <div v-for="(item, i) in iconList" class="icon-item" :key="i" @click="iconClick(item)">
      <v-icon :name="item" />
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
const iconList = [
  'alert',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'blank',
  'check-indeterminate',
  'check',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'delete-alt',
  'delete',
  'filter',
  'grab',
  'hide',
  'menu',
  'overflow',
  'plus',
  'search',
  'show',
  'spinner',
  'triangle-down',
  'triangle-left',
  'triangle-right',
  'triangle-up',
  'upload',
];
const iconClick = (i: string) => {
  navigator.clipboard.writeText(`<v-icon name="${i}" />`).then(() => {
    alert(`Yes: <v-icon name="${i}" /> copied！🎉`);
  });
};
</script>
<style scoped lang="scss">
.icon-container {
  display: flex;

  flex-wrap: wrap;
  .icon-item {
    width: 25%;
    height: 100px;
    margin: 3px 0;
    padding: 10px 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 10px 5px #dedede;
    }
  }
}
</style>
