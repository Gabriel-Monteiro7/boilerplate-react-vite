import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

// https://vitejs.dev/config/
//{mode}
export default defineConfig(() => ({
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, '/src') }]
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./.test/setup.ts'],
    include: ['**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache']
  }
}))
