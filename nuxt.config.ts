export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxtjs/google-fonts",
    "nuxt-gtag",
  ],
   googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800],
      Rubik: [400, 500, 600, 700, 800],
    },
    display: 'swap',
    subsets: 'latin',
    download: true, 
  },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
  },
});
