import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://gopoma.github.io/ga-react-ts-todo-list/",
  plugins: [react()],
})
