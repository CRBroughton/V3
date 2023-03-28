// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth', '@nuxt/devtools'],
  build: { transpile: ['trpc-nuxt'] },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true,
    shim: false,
    typeCheck: 'build',
  },
  runtimeConfig: {
    NUXT_AUTH_ORIGIN: process.env.AUTH_ORIGIN,
  },
  auth: {
    origin: process.env.AUTH_ORIGIN,
  },
  devtools: {
    enabled: false,
  },
  experimental: {
    componentIslands: false,
  },
})
