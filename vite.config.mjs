import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  // base: '/', // for Cpanel
  base: '/make-me-art-fe/', // for gh-pages

  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      svgrOptions: {
        ref: true,
      },
    }),
  ],

  build: {
    outDir: 'dist',
  },

  resolve: {
    alias: {
      styles: path.resolve(__dirname, './src/styles'),
      img: path.resolve(__dirname, './src/assets/img'),
      svg: path.resolve(__dirname, './src/assets/svg'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      ui: path.resolve(__dirname, './src/ui'),
      constants: path.resolve(__dirname, './src/constants'),
      api: path.resolve(__dirname, './src/api'),
      translation: path.resolve(__dirname, './src/translation'),
      modals: path.resolve(__dirname, './src/modals'),
      queries: path.resolve(__dirname, './src/queries'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },

  server: {
    port: 3000,
  },
});
