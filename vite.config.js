import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk
          vendor: ['react', 'react-dom'],
          // GSAP animations
          animations: ['gsap', '@gsap/react'],
        },
      },
    },
    reportCompressedSize: true,
  },

  server: {
    port: 3000,
    open: true,
    host: true,
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap'],
  },
});
