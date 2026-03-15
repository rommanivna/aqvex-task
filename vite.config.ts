import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind should be configured via PostCSS (e.g. postcss.config.js)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
