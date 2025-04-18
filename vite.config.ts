import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ManusAIComponents',
      fileName: (format) => `manus-ai-components.${format}.js`
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: ['vue', 'primevue'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: 'Vue',
          primevue: 'PrimeVue'
        },
        // Generate sourcemaps
        sourcemap: true
      }
    },
    // Generate TypeScript declaration files
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    // Minify the output
    minify: 'terser'
  }
});
