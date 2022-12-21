import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "npm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
