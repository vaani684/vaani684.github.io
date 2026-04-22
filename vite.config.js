import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. Set the base path
  // If your URL is https://vaani684.github.io/, use '/'
  // If your URL is https://vaani684.github.io/portfolio/, use '/portfolio/'
  base: '/', 
  
  build: {
    // 2. Ensure the build output is clean
    outDir: 'dist',
  }
})
