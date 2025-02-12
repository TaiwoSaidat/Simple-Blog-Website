import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["firebase/app", "firebase/firestore"],
  },
  plugins: [react(), tailwindcss()],
  // css: {
  //   postcss: "./postcss.config.js",
  // },
});
