import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Polling avoids file-lock crashes on OneDrive folders in Windows.
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
})
