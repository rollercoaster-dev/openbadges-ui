// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  typescript: {
    // Disable type checking to avoid issues with the mock data
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  docs: {
    autodocs: true
  }
};
