import { createApp } from 'vue';
import App from './App.vue';

import 'virtual:svg-icons-register';
import Vuse from '@vuse-ui/components';
import { themeSwitch } from '@vuse-ui/themes';

themeSwitch();

createApp(App).use(Vuse).mount('#app');
