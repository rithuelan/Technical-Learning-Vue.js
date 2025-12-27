export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],

  modules: [],

  app: {
    head: {
      title: 'Nuxt Phase 5 App',
      meta: [
        { name: 'description', content: 'Nuxt 4 SSR full-stack example' }
      ]
    }
  }
})
