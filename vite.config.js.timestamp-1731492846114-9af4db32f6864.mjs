// vite.config.js
import { defineConfig } from "file:///E:/SAMBHRAM24/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///E:/SAMBHRAM24/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import compression from "file:///E:/SAMBHRAM24/frontend/node_modules/vite-plugin-compression/dist/index.mjs";
import cssnano from "file:///E:/SAMBHRAM24/frontend/node_modules/cssnano/src/index.js";
import { config } from "file:///E:/SAMBHRAM24/frontend/node_modules/dotenv/lib/main.js";
config();
var vite_config_default = defineConfig({
  base: "/",
  // Ensure root path is correctly set for deployment
  // Add server configuration for network access
  server: {
    host: "0.0.0.0",
    // Expose to all network interfaces
    port: 3e3,
    // Specify port
    strictPort: true,
    // Fail if port is in use
    watch: {
      usePolling: true
      // Helps with some network file systems
    }
  },
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress",
      // Use Brotli compression
      ext: ".br"
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          vendor: ["react", "react-dom", "react-router-dom"]
        }
      }
    },
    minify: "terser",
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: "default"
          // Default minification options
        })
      ]
    }
  },
  define: {
    "process.env": process.env
  },
  // Optional: Add HMR and other development optimizations
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxTQU1CSFJBTTI0XFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxTQU1CSFJBTTI0XFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9TQU1CSFJBTTI0L2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XHJcbmltcG9ydCBjc3NuYW5vIGZyb20gJ2Nzc25hbm8nO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdkb3RlbnYnO1xyXG5cclxuY29uZmlnKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6ICcvJywgLy8gRW5zdXJlIHJvb3QgcGF0aCBpcyBjb3JyZWN0bHkgc2V0IGZvciBkZXBsb3ltZW50XHJcbiAgXHJcbiAgLy8gQWRkIHNlcnZlciBjb25maWd1cmF0aW9uIGZvciBuZXR3b3JrIGFjY2Vzc1xyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogJzAuMC4wLjAnLCAgLy8gRXhwb3NlIHRvIGFsbCBuZXR3b3JrIGludGVyZmFjZXNcclxuICAgIHBvcnQ6IDMwMDAsICAgICAgIC8vIFNwZWNpZnkgcG9ydFxyXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSwgLy8gRmFpbCBpZiBwb3J0IGlzIGluIHVzZVxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgdXNlUG9sbGluZzogdHJ1ZSAvLyBIZWxwcyB3aXRoIHNvbWUgbmV0d29yayBmaWxlIHN5c3RlbXNcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgY29tcHJlc3Npb24oe1xyXG4gICAgICBhbGdvcml0aG06ICdicm90bGlDb21wcmVzcycsIC8vIFVzZSBCcm90bGkgY29tcHJlc3Npb25cclxuICAgICAgZXh0OiAnLmJyJyxcclxuICAgIH0pLFxyXG4gIF0sXHJcblxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgLy8gU3BsaXQgdmVuZG9yIGNvZGVcclxuICAgICAgICAgIHZlbmRvcjogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1pbmlmeTogJ3RlcnNlcicsXHJcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDE1MDAsXHJcbiAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgIGNvbXByZXNzOiB7IC8vIFJlbW92ZSBjb25zb2xlLmxvZ3MgaW4gcHJvZHVjdGlvblxyXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgY3NzbmFubyh7XHJcbiAgICAgICAgICBwcmVzZXQ6ICdkZWZhdWx0JywgLy8gRGVmYXVsdCBtaW5pZmljYXRpb24gb3B0aW9uc1xyXG4gICAgICAgIH0pLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBkZWZpbmU6IHtcclxuICAgICdwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52LFxyXG4gIH0sXHJcblxyXG4gIC8vIE9wdGlvbmFsOiBBZGQgSE1SIGFuZCBvdGhlciBkZXZlbG9wbWVudCBvcHRpbWl6YXRpb25zXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBpbmNsdWRlOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXHJcbiAgfSxcclxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUCxTQUFTLG9CQUFvQjtBQUN2UixPQUFPLFdBQVc7QUFDbEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsY0FBYztBQUV2QixPQUFPO0FBRVAsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBO0FBQUE7QUFBQSxFQUdOLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixZQUFZO0FBQUE7QUFBQSxJQUNaLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsTUFDVixXQUFXO0FBQUE7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUE7QUFBQSxVQUVaLFFBQVEsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUEsUUFDbkQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsdUJBQXVCO0FBQUEsSUFDdkIsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUEsUUFDUixlQUFlO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsUUFBUTtBQUFBLFVBQ04sUUFBUTtBQUFBO0FBQUEsUUFDVixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixlQUFlLFFBQVE7QUFBQSxFQUN6QjtBQUFBO0FBQUEsRUFHQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsU0FBUyxhQUFhLGtCQUFrQjtBQUFBLEVBQ3BEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
