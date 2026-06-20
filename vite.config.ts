import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: [
      "node_modules/**",
      "dist/**",
      ".wrangler/**",
      ".tanstack/**",
      "routeTree.gen.ts",
    ],
  },
  lint: {
    ignorePatterns: [
      "node_modules/**",
      "dist/**",
      ".wrangler/**",
      ".tanstack/**",
      "routeTree.gen.ts",
    ],
  },
});
