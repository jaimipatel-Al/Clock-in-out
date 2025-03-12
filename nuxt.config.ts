// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Clock In-Out",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "clock.png" }],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  tailwindcss: {
    cssPath: [`/assets/css/tailwind.css`, { injectPosition: "first" }],
    config: {},
    configPath: "tailwind.config.js",
    viewer: true,
    exposeConfig: false,
  },
  colorMode: {
    classSuffix: "",
  },
});
