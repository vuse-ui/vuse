import { Theme } from './type';

export const vuseLightTheme: Theme = new Theme({
  id: 'vuse-light-theme',
  name: 'Light Mode',
  data: {
    'global-bg': 'white',
  },
});

export const vuseDarkTheme: Theme = new Theme({
  id: 'vuse-dark-theme',
  name: 'Dark Mode',
  data: {
    'global-bg': 'black',
  },
});
