import type { inferAsyncReturnType } from '@trpc/server'
import { prisma } from '../prisma'

export const createContext = () => {
  return {
    prisma,
  }
}

// Context type for Prisma to use in API
export type Context = inferAsyncReturnType<typeof createContext>
