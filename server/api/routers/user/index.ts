import { z } from 'zod'
import type { User } from '@prisma/client'
import { publicProcedure, router } from '../../trpc'
import type { ValidatePrisma } from '../../../utils/validatePrisma'

export const userRouter = router({
  getUsers: publicProcedure
    .query(async (req) => {
      const users = await req.ctx.prisma.user.findMany()
      return users
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
