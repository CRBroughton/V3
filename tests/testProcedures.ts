import type { Session } from 'next-auth'
import prisma from './mocks'
import { appRouter } from '~~/server/api/router'

interface User {
  id: string
  name: string
  email: string
  emailVerified: Date | null
  image: string
}

export const testUser: User = {
  id: '97527cbe-2de0-40cd-a953-8caae780e66e',
  name: 'Craig Broughton',
  email: 'craig.broughton@email.com',
  emailVerified: null,
  image: '',
}

export function testProtectedProcedures() {
  return appRouter.createCaller({
    prisma,
    session: {
      user: testUser,
      expires: new Date().toISOString(),
    },
  })
}

export function testPublicProcedures() {
  return appRouter.createCaller({ prisma, session: {} as Session })
}
