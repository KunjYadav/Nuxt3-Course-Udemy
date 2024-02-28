// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    HELLO: "world in the server not the client",
    public: {
      WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
    },
  },
});
