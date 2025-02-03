import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
// import eslint from 'vite-plugin-eslint';

export default defineConfig({
  resolve: {
    alias: [
      {
        // "@": path.resolve(__dirname, "./src"),
        find: "@",
        replacement: path.resolve(__dirname, "./resources/js"),
      },
    ],
  },
  plugins: [
    laravel({
      input: ['resources/js/main.jsx'],
    }),
    react(),
    reactRefresh(),
    // eslint(),
  ],
});
