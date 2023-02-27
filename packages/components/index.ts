import { type App, type Plugin } from 'vue';

import components from './components';
import { VuseOptions } from './utils/types';

const Vuse: Plugin = {
  install(app: App, options: VuseOptions) {
    components.forEach(component => {
      app.use(component, options);
    });
  },
};

export default Vuse;
