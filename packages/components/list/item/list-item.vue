<template>
  <div class="v-list-item">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="VListItem">
import { computed, ref } from 'vue';

import './list-item.scss';
import { listItemProps } from './props';

const props = defineProps(listItemProps);
</script>
