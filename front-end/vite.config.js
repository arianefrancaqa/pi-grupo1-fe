import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const defineConfig = ({
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
    }
  },
  base: '/',
  root: './src',
  plugins: [react()],
});
export default defineConfig;
