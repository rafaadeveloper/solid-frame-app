import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  base: "./",
  build: {
    outDir: "build",
    sourcemap: false,
    minify: "esbuild",
  },
});
