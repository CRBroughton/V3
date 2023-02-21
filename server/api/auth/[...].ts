// file: ~/server/api/auth/[...].ts
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'
import { prisma } from '~~/server/prisma'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  adapter: PrismaAdapter(prisma),
  secret: runtimeConfig.NUXT_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: runtimeConfig.NUXT_GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.NUXT_GITHUB_CLIENT_SECRET,
    }),
  ],
})
