// file: ~/server/api/auth/[...].ts
import Auth0Provider from 'next-auth/providers/auth0'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'
import { prisma } from '~~/server/prisma'
import { envConfig } from '~~/envConfig'

export default NuxtAuthHandler({
  adapter: PrismaAdapter(prisma),
  secret: envConfig.NUXT_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Auth0Provider.default({
      clientId: envConfig.NUXT_AUTH0_CLIENT_ID,
      clientSecret: envConfig.NUXT_AUTH0_CLIENT_SECRET,
      issuer: envConfig.NUXT_AUTH0_ISSUER,
    }),
  ],
})
