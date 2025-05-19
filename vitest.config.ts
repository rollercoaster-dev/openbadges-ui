import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.{test,spec}.{js,ts,vue}'],
    setupFiles: ['tests/integration/setup.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/setup.ts',
        '**/*.d.ts',
        '**/*.config.{js,ts}',
        '**/histoire.{js,ts}',
      ],
    },
    deps: {
      inline: ['vue', 'primevue'],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
