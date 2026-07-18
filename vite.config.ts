import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // reactCompilerPreset
import babel from '@rolldown/plugin-babel';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    svgr(),
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
