import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import cssnano from 'cssnano';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  base: '/',
  
  server: {
    host: '0.0.0.0',
    port: 3069,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },

  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    },
    minify: 'terser',
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_console: true,      // Remove console.* calls
        drop_debugger: true,     // Remove debugger statements
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'], // Remove specific console functions
        pure_getters: true,      // Optimize getter functions
        passes: 2,              // Additional optimization passes
        unsafe: true,           // Enable unsafe transformations
      },
      format: {
        comments: false,        // Remove comments
      },
      mangle: {
        properties: false,      // Don't mangle property names
      },
    },
  },

  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: 'default',
        }),
      ],
    },
  },

  define: {
    'process.env': process.env,
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});