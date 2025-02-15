import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

const includedFiles = ["./app/**/*.{test,spec}.?(c|m)[jt]s?(x)"];

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["vitest-setup.ts"],
      include: includedFiles,
      coverage: { include: includedFiles },
    },
  })
);
