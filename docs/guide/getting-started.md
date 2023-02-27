<h3 style="color: red;margin-bottom: 2rem">
  Vuse-UI is still under development, please DO NOT use it in your production environment
</h3>

# Vue3 UI Framework
Vuse contains many out-of-the-box components, it is based on [Base Web Design](https://baseweb.design). But it provides support for vue3

# Installation
```shell
# npm
npm install @vuse-ui

# pnpm
pnpm add @vuse-ui
```

# Full import
```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

import 'virtual:svg-icons-register';
import Vuse from '@vuse-ui/components';

createApp(App).use(Vuse).mount('#app');
```

# Component prefix
When Vuse is introduced, a global configuration object can be passed in, use componentPrefix to specify a component prefix  
eg: V, then you can add a button by `<v-button type="primary">hello</v-button>`
```ts
createApp(App).use(Vuse, { componentPrefix: 'V' }).mount('#app');
```

# On-demand Import

Not everyone need all compoents, so you can just import a part components of vuse. For example, we import a Button in your `main.ts`

```ts
import { createApp } from 'vue';
import App from './App.vue';

import 'virtual:svg-icons-register';
import Button from '@vuse-ui/components/button';

createApp(App).use(Button).mount('#app');
```

And now, you can use it in your vue file like this:

```vue
<template>
  <v-button>Hello, Vuse </v-button>
</template>
```

# Who is using Vuse?
Nobody for now...:grinning:
