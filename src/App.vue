<template>
  <div style="display: flex; flex-direction: column">
    <div class="title">Buttons:</div>
    <div class="btn-demo">
      <span>Size </span>
      <v-button size="mini" type="primary">Mini</v-button>
      <v-button size="compact" type="primary">Compact</v-button>
      <v-button size="default" type="primary">Default</v-button>
      <v-button size="large" type="primary">Large</v-button>
    </div>
    <div class="btn-demo">
      <span>Kind </span>
      <v-button type="primary">Primary</v-button>
      <v-button type="secondary">Secondary</v-button>
      <v-button type="tertiary">Tertiary</v-button>
    </div>
    <div class="btn-demo">
      <span>Shape </span>
      <v-button shape="default">Default</v-button>
      <v-button shape="pill">Pill</v-button>
      <v-button shape="round">Round</v-button>
      <v-button shape="circle">Circle</v-button>
      <v-button shape="square">Square</v-button>
    </div>
    <div class="btn-demo">
      <span>Disabled </span>
      <v-button disabled>Disabled</v-button>
    </div>
    <div class="btn-demo">
      <span>Loading </span>
      <v-button loading>Loading</v-button>
    </div>
    <div class="btn-demo">
      <span>Click </span>
      <v-button @click="greeting">Click me</v-button>
    </div>

    <div class="title">Notifications:</div>
    <div class="notification-demo">
      <span>Kind </span>
      <v-notification kind="info">Info notification</v-notification>
      <v-notification kind="positive">Positive notification</v-notification>
      <v-notification kind="warning">Warning notification</v-notification>
      <v-notification kind="negative">Negative notification</v-notification>
      <span>Closeable </span>
      <v-notification closeable>Closeable notification</v-notification>
    </div>

    <div class="title">Icons:</div>
    <div>
      <v-icon name="alert" title="Alert" size="16" color="red" />
      <v-icon name="alert" title="Alert" size="32" color="green" />
      <v-icon name="alert" title="Alert" size="48" color="black" />
      <v-icon name="alert" title="Alert" size="64" color="blue" />
      <v-icon name="arrow-down" title="Arrow down" />
    </div>

    <div class="title">Textarea:</div>
    <div class="notification-demo">
      <span>Size </span>
      <v-textarea size="mini" v-model="inputs.mini" />
      <v-textarea size="compact" v-model="inputs.compact" />
      <v-textarea size="default" v-model="inputs.default" />
      <v-textarea size="large" v-model="inputs.large" />
      <span>Error </span>
      <v-textarea error placeholder="Controlled Input" v-model="inputs.error" />
      <span>Positive </span>
      <v-textarea positive placeholder="Controlled Input" v-model="inputs.positive" />
      <span>Disabled </span>
      <v-textarea disabled placeholder="Controlled Input" v-model="inputs.disabled" />
      <span>Readonly </span>
      <v-textarea readonly placeholder="Controlled Input" v-model="inputs.readonly" />
    </div>

    <div class="title">Input:</div>
    <div class="notification-demo">
      <v-input :size="inputSize" v-model="inputs[inputSize]" v-bind="inputStatus" />
      <label for="pet-select">Choose size:</label>
      <select name="size" id="size" v-model="inputSize">
        <option v-for="size of sizes" :value="size" :key="size">{{ size }}</option>
      </select>
      <fieldset>
        <legend>Choose input's features:</legend>
        <div>
          <input type="checkbox" id="Disabled" name="Disabled" value="disabled" v-model="inputStatus.disabled" />
          <label for="Disabled">Disabled</label>
        </div>

        <div>
          <input type="checkbox" id="Error" name="Error" value="error" v-model="inputStatus.error" />
          <label for="Error">Error</label>
        </div>
        <div>
          <input type="checkbox" id="Positive" name="Positive" value="positive" v-model="inputStatus.positive" />
          <label for="Positive">Positive</label>
        </div>
        <div>
          <input type="checkbox" id="Readonly" name="Readonly" value="readonly" v-model="inputStatus.readonly" />
          <label for="Readonly">Readonly</label>
        </div>
        <div>
          <input type="checkbox" id="Clearable" name="Clearable" value="clearable" v-model="inputStatus.clearable" />
          <label for="Clearable">Clearable</label>
        </div>
      </fieldset>
    </div>

    <div class="title">Avatar:</div>
    <div class="notification-demo">
      <span>Pic </span>
      <v-avatar src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy" />
      <span>Text </span>
      <v-avatar name="Eobard Thawne" />
      <span>Size </span>
      <v-avatar src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy" size="16px" />
      <v-avatar name="Eobard Thawne" size="32px" />
    </div>

    <div class="title">Link:</div>
    <div>
      <v-link animateUnderline href="https://vuse-ui.github.io/vuse/">Doc</v-link>
    </div>

    <div class="title">Breadcrumbs:</div>
    <div class="notification-demo">
      <v-breadcrumbs>
        <v-link animateUnderline href="#parent">Parent Page</v-link>
        <v-link animateUnderline href="#sub">Sub-Parent Page</v-link>
        <v-link animateUnderline href="http://127.0.0.1:3000/">Doc</v-link>
      </v-breadcrumbs>
    </div>

    <div class="title">Upload:</div>
    <div class="notification-demo">
      <span>Small with size limited under 100kb</span>
      <v-upload size="small" maxSize="819200"></v-upload>
      <span>Basic </span>
      <v-upload vstyle="basic"></v-upload>
      <span>Large </span>
      <v-upload size="large"></v-upload>
      <span>Important </span>
      <v-upload vstyle="important"></v-upload>
      <span>Positive </span>
      <v-upload vstyle="positive"></v-upload>
      <span>Multiple </span>
      <v-upload multiple="true"></v-upload>
      <span>Disabled </span>
      <v-upload disabled="true"></v-upload>
    </div>

    <div class="title">List：</div>
    <div class="list-demo">
      <span>Default Size || Add border</span>
      <v-list bordered>
        <v-list-item>list item 1</v-list-item>
        <v-list-item>list item 2</v-list-item>
      </v-list>
      <span>Mini Size || Add header or footer </span>
      <v-list size="mini" header="header" footer="footer">
        <v-list-item>list item 1</v-list-item>
        <v-list-item>list item 2</v-list-item>
      </v-list>
      <span>Large Size || Custom header or footer</span>
      <v-list size="large">
        <template #header>header <v-icon name="alert" title="Alert" size="16" color="red" /> </template>
        <v-list-item>list item 1</v-list-item>
        <v-list-item>list item 2</v-list-item>
        <template #footer>footer <v-icon name="alert" title="Alert" size="16" color="green" /></template>
      </v-list>
    </div>

    <div class="title">Table:</div>
    <div class="table-demo">
      <span>Basic table</span>
      <v-table :dataSource="dataSource" :columns="columns">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'operation'">
            <v-button size="mini" type="primary" @click="operationFn(record.key)">操作</v-button>
          </template>
        </template>
      </v-table>
      <span>Table with border</span>
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
            <v-button size="mini" type="primary" @click="operationFn(record.key)">操作</v-button>
          </template>
        </template>
        <template #header>Header</template>
        <template #footer>Footer</template>
      </v-table>
      <span>Fixed meter head</span>
      <v-table height="70px" bordered :dataSource="dataSource" :columns="columns">
        <template #header>Header</template>
        <template #footer>Footer</template>
      </v-table>
      <span>Fixed column</span>
      <v-table :scrollWidth="1200" bordered :dataSource="dataSource" :columns="columnsFixed"> </v-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface ColumnProps {
  dataIndex?: string;
  title: string;
  key: string;
  width?: number | string;
  fixed?: boolean | string;
}

const greeting = () => {
  alert('Clicked!');
};

const operationFn = (key: string) => {
  alert(`你操作数据的key为：${key}`);
};

const inputs = ref<{ [n: string]: string }>({
  error: 'Error Textarea',
  positive: 'Positive Textarea',
  disabled: 'Disabled Textarea',
  readonly: 'Readonly Textarea',
  clearable: 'Clearable Input',
  mini: 'Mini',
  compact: 'Compact',
  default: 'Default',
  large: 'Large',
});
const inputSize = ref('default');
const sizes = ['mini', 'compact', 'default', 'large'];
const inputStatus = ref({
  error: false,
  positive: false,
  disabled: false,
  readonly: false,
  clearable: false,
});

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
const columns: Array<ColumnProps> = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 300,
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  // {
  //   title: '操作',
  //   dataIndex: 'operation',
  //   key: 'operation',
  // },
];
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
<style scoped>
.title {
  margin: 0.5rem 0;
}
.btn-demo * {
  margin-right: 10px;
  margin-bottom: 5px;
}
.notification-demo {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.list-demo,
.table-demo {
  width: 50%;
}
</style>
