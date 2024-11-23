import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? '/Todo-List-Git/' : '/',
  plugins: [
    vue({
      template: {
        transformAssetUrls
      }
    }),
    vuetify({ autoImport: true }) // Включаем автоимпорт для компонентов Vuetify
  ]
})