import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { buildPlugin } from "vite-plugin-build";

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    buildPlugin({
      fileBuild: {
        emitDeclaration: true,
        inputFolder: "packages",
      },
      libBuild: {
        buildOptions: {
          rollupOptions: {
            external: ["react", "react-dom"],
            output: { globals: { react: "React", "react-dom": "ReactDOM" } },
          },
          lib: {
            entry: resolve("packages/index.ts"),
            name: "dslZustand",
            fileName: (format) => `dsl-zustand.${format}.js`,
          },
        },
      },
    }),
  ],

  resolve: {
    alias: {
      "@": resolve("./"),
    },
  },

  /* css配置，此项目没用css，因此忽略掉 */
  // css: {
  //   modules: {
  //     localsConvention: "camelCaseOnly",
  //     generateScopedName: (name: string) => `dsl-${name}`,
  //   },
  // },
});
