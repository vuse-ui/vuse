import { type App, type Plugin } from 'vue';

import Button from './button';

const Vuse: Plugin = {
  install(app: App) {
    Button.install?.(app);
  },
};

export default Vuse;

export * from './button';
