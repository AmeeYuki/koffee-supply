import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Để Vite xử lý lỗi 404 cho các đường dẫn không tồn tại
        entryFileNames: `index.html`,
      },
  base: "/",
  server: {
    port: 3000,
    open: true,
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
