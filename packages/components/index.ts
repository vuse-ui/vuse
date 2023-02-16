import { type App, type Plugin } from 'vue';

import components from './components';

const Vuse: Plugin = {
  install(app: App) {
    components.forEach(component => {
      app.use(component);
    });
  },
};

export default Vuse;
