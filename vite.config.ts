import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import { buildPlugin } from 'vite-plugin-build';

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
        inputFolder: resolve('src/packages')
      },
      libBuild: {
        buildOptions: {
          rollupOptions: {
            external: ['react', 'react-dom'],
            output: { globals: { react: 'react', 'react-dom': 'react-dom' } },
          },
          lib: {
            entry: resolve('src/packages/index.ts'),
            name: 'dslZustand',
            fileName: (format) => `dsl-zustand.${format}.js`,
          },
        },
      },
    }),
  ],

  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: (name: string) => `dsl-${name}`,
    },
  },
})
