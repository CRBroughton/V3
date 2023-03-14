import type { Session } from 'next-auth'
import { appRouter } from '~~/server/api/router'
import UserBuilder from '~~/server/builders/UserBuilder'
import { prisma } from '~~/server/prisma'

export const testProtectedProcedures = () => {
  const { user: sessionUser, setUserID, setUserName, setUserEmail } = UserBuilder()

  setUserID('97527cbe-2de0-40cd-a953-8caae780e66e')
  setUserName('Craig Broughton')
  setUserEmail('craig.broughton@email.com')

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
