import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), TanStackRouterVite(), svgr()],
  assetsInclude: ["./src/assets/**"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@codemirror/state": path.resolve(
        __dirname,
        "node_modules/@codemirror/state"
      ),
    },
  },
});
