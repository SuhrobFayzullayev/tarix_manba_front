export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "animate.css/animate.min.css",
    "~/assets/scss/main.scss",
    "~/assets/tailwind/main.css",
  ],
  modules: [
    "nuxt-swiper",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    // '@nuxtjs/axios',
  ],
  plugins: [{ src: "~/plugins/aos", mode: "client" }],
  runtimeConfig: {
    public: {
      // baseUrl: 'http://tarixmanba.sosgroup.uz/api'
      baseUrl: "http://tarixmanba.sosgroup.uz:2118/api",
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
