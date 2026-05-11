import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/make-me-art-fe/',

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
      components: path.resolve(__dirname, './src/components'),
      ui: path.resolve(__dirname, './src/ui'),
      constants: path.resolve(__dirname, './src/constants'),
      api: path.resolve(__dirname, './src/api'),
    },
  },

  server: {
    port: 3000,
  },
});
