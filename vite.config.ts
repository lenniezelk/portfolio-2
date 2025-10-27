// vite.config.ts
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart(),
    tailwindcss(),
    viteReact(),
  ],
  assetsInclude: ['**/*.riv'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})