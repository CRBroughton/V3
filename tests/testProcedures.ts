import type { Session } from 'next-auth'
import { uuidGenerator } from '~~/prisma/UUIDGenerator'
import { appRouter } from '~~/server/api/router'
import UserBuilder from '~~/server/builders/UserBuilder'
import { prisma } from '~~/server/prisma'

const sessionUser = new UserBuilder()
  .setID(uuidGenerator())
  .setName('Craig Broughton')
  .setEmail('craig.broughton@email.com')
  .build()

export const testProtectedProcedures = () => {
  return appRouter.createCaller({
    prisma,
    session: {
      user: sessionUser,
      expires: new Date().toISOString(),
    },
  })
}

export const testPublicProcedures = () => {
  return appRouter.createCaller({ prisma, session: {} as Session })
}
