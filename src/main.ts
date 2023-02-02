import { createApp } from 'vue';
import App from './App.vue';

import Button from '@vuse-ui/components/button';
import Notification from '@vuse-ui/components/notification';

createApp(App).use(Button).use(Notification).mount('#app');
