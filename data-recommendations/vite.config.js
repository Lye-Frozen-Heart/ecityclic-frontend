import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/recommendation": {
        target: "http://localhost:3000", // Dirección del backend
        changeOrigin: true, // Cambiar el origen
        rewrite: (path) => path.replace(/^\/recommendation/, "/recommendation"), // Reescribe el path
      },
    },
  },
  plugins: [react()],
});
