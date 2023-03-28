import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { protectedProcedure, publicProcedure, router } from '../../trpc'

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
    }))
    .mutation(async (req) => {
      const user = await req.ctx.prisma.user.create({
        data: req.input,
      })
      if (!user) {
        return {
          type: 'error',
          error: new TRPCError({
            message: 'failed to create a user',
            code: 'INTERNAL_SERVER_ERROR',
          }),
        } as const
      }
      return {
        type: 'ok',
        data: user,
      } as const
    }),
  isAuthed: protectedProcedure
    .query(() => {
      return {
        type: 'ok',
        data: 'you are authed!',
      } as const
    }),
})
