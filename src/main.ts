import { createApp } from 'vue';
import App from './App.vue';

import 'virtual:svg-icons-register';
import Vuse from '../packages/components';

createApp(App).use(Vuse).mount('#app');
