// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    origin: process.env.NUXT_AUTH_ORIGIN,
  },
  modules: ['@sidebase/nuxt-auth'],
  runtimeConfig: {
    NUXT_SECRET: process.env.NUXT_SECRET,
    AUTH_ORIGIN: process.env.AUTH_ORIGIN,
    NUXT_AUTH0_CLIENT_ID: process.env.NUXT_AUTH0_CLIENT_ID,
    NUXT_AUTH0_CLIENT_SECRET: process.env.NUXT_AUTH0_CLIENT_SECRET,
    NUXT_AUTH0_ISSUER: process.env.NUXT_AUTH0_ISSUER,
    NUXT_PROCESS_ENV: process.env.NODE_ENV,
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
