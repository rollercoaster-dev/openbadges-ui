// .storybook/preview.js
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/styles/themes.css';
import '../src/styles/accessibility.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    description: {
      component: 'Manus AI Open Badges Component Library for Vue 3',
    },
  },
  a11y: {
    // Optional configuration for accessibility addon
    element: '#storybook-root',
    config: {},
    options: {},
    manual: true,
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      default: '',
      dark: 'manus-dark-theme',
      'high-contrast': 'manus-high-contrast-theme',
      'large-text': 'manus-large-text-theme',
      'dyslexia-friendly': 'manus-dyslexia-friendly-theme',
    },
    defaultTheme: 'default',
  }),
  (story) => ({
    components: { story },
    template: '<div style="margin: 2em;"><story /></div>',
  }),
];
