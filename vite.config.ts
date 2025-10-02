import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows external access
    allowedHosts: [
      '.csb.app', // This allows all CodeSandbox hosts
      '.stackblitz.io',
      '.gitpod.io',
    ],
  },
})