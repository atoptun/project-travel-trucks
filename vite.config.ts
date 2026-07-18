import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // reactCompilerPreset
import babel from '@rolldown/plugin-babel';
import svgr from 'vite-plugin-svgr';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

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
    // VitePluginSvgSpritemap('./icons/**/*.svg', { injectSvgOnDev: true }),
    ViteImageOptimizer({
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        'node_modules/.vite-image-optimizer-cache',
      ),
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 75 },
      avif: { quality: 75 },
      svg: {},
      // svg: {
      //   plugins: [
      //     { name: 'removeViewBox', active: false },
      //     { name: 'sortAttrs', active: true },
      //   ],
      // },
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
