// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,
  ssr: true,
  css: [
    '~/assets/css/main.css', 
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
            type: 'text/javascript',
            src: 'js/bootstrap.js',
        },
    ]
    },
  },

  vite: {
    server: {
      allowedHosts: true
    }
  }
  
})
