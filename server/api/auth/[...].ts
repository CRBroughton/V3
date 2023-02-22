// file: ~/server/api/auth/[...].ts
import Auth0Provider from 'next-auth/providers/auth0'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'
import { prisma } from '~~/server/prisma'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  adapter: PrismaAdapter(prisma),
  secret: runtimeConfig.NUXT_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Auth0Provider.default({
      clientId: runtimeConfig.NUXT_AUTH0_CLIENT_ID,
      clientSecret: runtimeConfig.NUXT_AUTH0_CLIENT_SECRET,
      issuer: runtimeConfig.NUXT_AUTH0_ISSUER,
    }),
  ],
})
