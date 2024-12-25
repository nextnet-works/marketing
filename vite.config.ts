import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    svgr({
      svgrOptions: {
        // Ensure SVG icons are exported as React components
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add build optimizations
  build: {
    target: "esnext",
    minify: "esbuild",
  },
});
