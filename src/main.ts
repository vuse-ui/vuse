import { createApp } from 'vue';
import App from './App.vue';

import 'virtual:svg-icons-register';
import Button from '@vuse-ui/components/button';
import Notification from '@vuse-ui/components/notification';
import Icon from '@vuse-ui/components/icon';
import Textarea from '@vuse-ui/components/textarea';
import Input from '@vuse-ui/components/input';

createApp(App).use(Button).use(Notification).use(Icon).use(Textarea).use(Input).mount('#app');
