import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

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
      "@": "/src", // nếu bạn sử dụng alias
    },
  },
});
