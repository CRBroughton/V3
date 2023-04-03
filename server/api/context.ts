import type { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'
import { prisma } from '../prisma'

export function createContext(_event: H3Event) {
  return {
    prisma,
    session: _event.context.session,
  }
}

// Context type for Prisma to use in API
export type Context = inferAsyncReturnType<typeof createContext>
