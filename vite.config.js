import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Eurostat_LUCASproject_2022/',
  plugins: [vue()],
})
