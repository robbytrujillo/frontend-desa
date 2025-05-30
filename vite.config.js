import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Menonaktifkan source map
  },
  server: {
    host: '127.0.0.1',
    port: 3002,
  },
})
