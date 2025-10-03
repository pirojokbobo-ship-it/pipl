import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // ... ваши текущие настройки
  modules: ['shadcn-nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})