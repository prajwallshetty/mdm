// vite.config.js
import { defineConfig } from "file:///E:/SAMBHRAM24/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///E:/SAMBHRAM24/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import compression from "file:///E:/SAMBHRAM24/frontend/node_modules/vite-plugin-compression/dist/index.mjs";
import cssnano from "file:///E:/SAMBHRAM24/frontend/node_modules/cssnano/src/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress",
      // Use Brotli compression
      ext: ".br"
    })
  ],
  build: {
    minify: "terser",
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "lodash-vendor": ["lodash"],
          // For example, split lodash
          "your-component": ["./src/components/YourComponent.jsx"]
          // Split large components
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
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
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxTQU1CSFJBTTI0XFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxTQU1CSFJBTTI0XFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9TQU1CSFJBTTI0L2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcuanNcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XG5pbXBvcnQgY3NzbmFubyBmcm9tICdjc3NuYW5vJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBjb21wcmVzc2lvbih7XG4gICAgICBhbGdvcml0aG06ICdicm90bGlDb21wcmVzcycsIC8vIFVzZSBCcm90bGkgY29tcHJlc3Npb25cbiAgICAgIGV4dDogJy5icicsXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDE1MDAsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgICdyZWFjdC12ZW5kb3InOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgICAgICdsb2Rhc2gtdmVuZG9yJzogWydsb2Rhc2gnXSwgIC8vIEZvciBleGFtcGxlLCBzcGxpdCBsb2Rhc2hcbiAgICAgICAgICAneW91ci1jb21wb25lbnQnOiBbJy4vc3JjL2NvbXBvbmVudHMvWW91ckNvbXBvbmVudC5qc3gnXSwgLy8gU3BsaXQgbGFyZ2UgY29tcG9uZW50c1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsIC8vIFJlbW92ZSBjb25zb2xlLmxvZ3MgaW4gcHJvZHVjdGlvblxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgY3NzbmFubyh7XG4gICAgICAgICAgcHJlc2V0OiAnZGVmYXVsdCcsIC8vIERlZmF1bHQgbWluaWZpY2F0aW9uIG9wdGlvbnNcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sYUFBYTtBQUVwQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsTUFDVixXQUFXO0FBQUE7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUix1QkFBdUI7QUFBQSxJQUN2QixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixnQkFBZ0IsQ0FBQyxTQUFTLFdBQVc7QUFBQSxVQUNyQyxpQkFBaUIsQ0FBQyxRQUFRO0FBQUE7QUFBQSxVQUMxQixrQkFBa0IsQ0FBQyxvQ0FBb0M7QUFBQTtBQUFBLFFBQ3pEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQTtBQUFBLFFBQ2QsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxVQUNOLFFBQVE7QUFBQTtBQUFBLFFBQ1YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
