import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    // Allow all Render hosts and localhost
    // In production, Render uses dynamic subdomains, so we allow all .onrender.com hosts
    allowedHosts: [
      '.onrender.com', // Matches any Render subdomain (e.g., the-amazing-book-store.onrender.com)
      'localhost',
      '127.0.0.1',
      '.render.com' // Also allow render.com domains
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
