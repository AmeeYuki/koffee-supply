import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // Đảm bảo rằng đường dẫn gốc là "/"
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true, // Thêm dòng này để xử lý fallback cho định tuyến phía client khi reload trang
  },
  build: {
    rollupOptions: {
      output: {
        // Đảm bảo tất cả đường dẫn không xác định đều được phục vụ bởi index.html
        entryFileNames: "index.html",
      },
    },
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
