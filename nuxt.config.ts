// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    origin: process.env.AUTH_ORIGIN,
  },
  modules: ['@sidebase/nuxt-auth', '@nuxt/devtools'],
  devtools: {
    enabled: false,
  },
  runtimeConfig: {
    NUXT_AUTH_ORIGIN: process.env.AUTH_ORIGIN,
  },
  typescript: {
    strict: true,
    shim: false,
    typeCheck: 'build',
  },
  build: { transpile: ['trpc-nuxt'] },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
