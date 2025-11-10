// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/scss/main.scss'],
  app: {
    head: {
      title: 'Nuxt CSS',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  postcss: {
    plugins: {
      'postcss-nesting': {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  sourcemap: true,
});
