import * as path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const env = Object.entries(loadEnv("mock", process.cwd(), "")).reduce(
    (prev, [key, val]) => ({
      ...prev,
      [key]: val,
    }),
    {}
  ) as any;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      },
    },
    base: "/remove-sign-string/",
    define: {
      APP_VERSION: JSON.stringify(env.npm_package_version),
    },
  };
});
