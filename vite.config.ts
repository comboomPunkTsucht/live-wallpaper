import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { tanstackRouter } from '@tanstack/router'
import { resolve, __dirname } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackRouter(),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
