import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // allow access from Docker container
    port: 5173,      // default Vite port (optional)
    watch: {
      usePolling: true // necessary inside Docker, especially on Windows/macOS
    }
  }
})
