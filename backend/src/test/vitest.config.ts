import { defineConfig } from "vitest/config";
import swc from "rollup-plugin-swc";

export default defineConfig({
  plugins: [
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
          // tsx: true, // If you use react
          dynamicImport: true,
          decorators: true,
        },
        target: "es2021",
        transform: {
          decoratorMetadata: true,
        },
      },
    }),
  ],
  esbuild: false,
});
