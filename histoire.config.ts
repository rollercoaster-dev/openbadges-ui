import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  theme: {
    title: 'OpenBadges UI',
    logo: {
      square: './src/assets/logo.svg',
      light: './src/assets/logo.svg',
      dark: './src/assets/logo.svg'
    },
    colors: {
      primary: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81'
      }
    }
  },
  tree: {
    groups: [
      {
        id: 'components',
        title: 'Components',
      },
      {
        id: 'badges',
        title: 'Badges',
        include: file => file.title?.startsWith('Components/Badges/'),
      },
      {
        id: 'issuing',
        title: 'Issuing',
        include: file => file.title?.startsWith('Components/Issuing/'),
      },
    ],
  },
  setupFile: './histoire.setup.ts',
  outDir: 'histoire-dist',
})
