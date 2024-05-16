import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript';

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    typescript({
      target: 'es5',
      rootDir: resolve('src/packages/'),
      declaration: true,
      declarationDir: resolve('dist'),
      exclude: resolve('node_modules/**'),
      allowSyntheticDefaultImports: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve('src/packages/index.ts'),
      name: 'dslZustand',
      fileName: 'dsl-zustand',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  },
})
