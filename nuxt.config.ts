// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    origin: process.env.NUXT_AUTH_ORIGIN,
  },
  modules: ['@sidebase/nuxt-auth'],
  runtimeConfig: {
    NUXT_SECRET: process.env.NUXT_SECRET,
    NUXT_AUTH_ORIGIN: process.env.NUXT_AUTH_ORIGIN,
    NUXT_GITHUB_CLIENT_ID: process.env.NUXT_GITHUB_CLIENT_ID,
    NUXT_GITHUB_CLIENT_SECRET: process.env.NUXT_GITHUB_CLIENT_SECRET,
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
