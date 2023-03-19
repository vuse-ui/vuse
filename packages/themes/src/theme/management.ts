/* eslint-disable @typescript-eslint/no-explicit-any */
import { vuseLightTheme } from './data';
import { Theme } from './type';

const formatCSSVariables = (themeData: Theme['data']) => {
  return Object.keys(themeData)
    .map(cssVar => 'vuse--' + cssVar + ':' + themeData[cssVar])
    .join(';');
};

export const themeSwitch = (theme: Theme = vuseLightTheme) => {
  if (typeof window === 'undefined') return;
  (window as any)['vuseTheme'] = theme;
  const contentElement: HTMLStyleElement = document.createElement('style');
  contentElement.innerText = `root: { ${formatCSSVariables(theme.data)} }`;
  document.head.appendChild(contentElement);
};
