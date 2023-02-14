import { createApp } from 'vue';
import App from './App.vue';

import 'virtual:svg-icons-register';
import Button from '@vuse-ui/components/button';
import Notification from '@vuse-ui/components/notification';
import Icon from '@vuse-ui/components/icon';
import Textarea from '@vuse-ui/components/textarea';
import Input from '@vuse-ui/components/input';
import Avatar from '@vuse-ui/components/avatar';
import Link from '@vuse-ui/components/link';
import Breadcrumbs from '@vuse-ui/components/breadcrumbs';

createApp(App)
  .use(Button)
  .use(Notification)
  .use(Icon)
  .use(Textarea)
  .use(Avatar)
  .use(Input)
  .use(Link)
  .use(Breadcrumbs)
  .mount('#app');
