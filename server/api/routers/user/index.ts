import { z } from 'zod'
import type { User } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { publicProcedure, router } from '../../trpc'
import type { ValidatePrisma } from '../../../utils/validatePrisma'

export const userRouter = router({
  getUsers: publicProcedure
    .query(async (req) => {
      const users = await req.ctx.prisma.user.findMany()
      if (!users) {
        return {
          type: 'error',
          error: new TRPCError({ message: 'no users', code: 'NOT_FOUND' }),
        } as const
      }
      return {
        type: 'ok',
        data: users,
      } as const
    }),
  createUser: publicProcedure
    .input(z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
    }) satisfies z.Schema<User>)
    .mutation(async (req) => {
      const user = req.ctx.prisma.user.create<ValidatePrisma<User>>({
        data: req.input,
      })
      return user
    }),
})
