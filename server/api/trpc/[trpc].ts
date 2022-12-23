/**
 * This is the API-handler of your app that contains all your API routes.
 */
import { createNuxtApiHandler } from 'trpc-nuxt'
import { createContext } from '../context'
import { appRouter } from '../router'

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext,
})
