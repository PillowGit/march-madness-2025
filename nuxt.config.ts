// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // Link css to all pages from main.css
  css: ["@/assets/css/main.css"],
  // Add tailwindcss module
  modules: ["@nuxtjs/tailwindcss"],
  // Add google fonts
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Nunito:ital@0;1&display=swap",
        },
      ],
    },
  },
});
