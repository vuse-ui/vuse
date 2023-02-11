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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const greeting = () => {
  alert('Clicked!');
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
</style>
