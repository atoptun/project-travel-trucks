import path from 'path';
import { defineConfig } from 'vite';
import react from // reactCompilerPreset
'@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    babel({
      // presets: [reactCompilerPreset()]
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@assets': path.resolve(import.meta.dirname, './src/assets'),
      '@utils': path.resolve(import.meta.dirname, './src/utils'),
    },
  },
});
