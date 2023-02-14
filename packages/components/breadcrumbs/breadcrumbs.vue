<script lang="ts">
import './breadcrumbs.scss';
import { Icon } from '../icon';
import { h, VNode } from 'vue';
export default {
  name: 'VBreadcrumbs',
  setup(_, { slots }) {
    const defaultNode = (slots.default && slots.default()) ?? [];
    const vnode: VNode[] = [];
    for (const node of defaultNode) {
      node !== defaultNode[defaultNode.length - 1]
        ? vnode.push(
            node,
            h(Icon, { name: 'chevron-right', size: 20, style: 'margin:0 8px;', color: 'rgb(107, 107, 107)' })
          )
        : vnode.push(node);
    }
    return () => h('div', { class: 'v-breadcrumbs' }, vnode);
  },
};
</script>
<style lang="scss" scoped></style>
