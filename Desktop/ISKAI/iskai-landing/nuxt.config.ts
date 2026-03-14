// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800],
      'JetBrains Mono': [400, 500],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'ISKAI — Agents IA & Automatisation sur-mesure',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'ISKAI conçoit des agents IA et automatisations sur-mesure pour éliminer vos tâches répétitives. Livrés en 48h. Impact immédiat.',
        },
        { name: 'theme-color', content: '#0A0A0F' },
        { property: 'og:title', content: 'ISKAI — Agents IA & Automatisation sur-mesure' },
        { property: 'og:description', content: 'Des agents IA et automatisations sur-mesure qui éliminent vos tâches répétitives. Livrés en 48h.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },
})
