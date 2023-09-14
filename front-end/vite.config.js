import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "version": 2,
    "builds": [
      { "src": "package.json", "use": "@vercel/static-build", "config": { "distDir": "dist" } },
      { "src": "serverless/*.js", "use": "@vercel/node" }
    ],
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/serverless/test.js"
      }
    ]
  }

})
