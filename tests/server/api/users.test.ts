import { describe, expect, test } from 'vitest'
import type { inferProcedureOutput } from '@trpc/server'
import prisma from '../../mocks'
import type { AppRouter } from '~~/server/api/router'
import { testProtectedProcedures, testPublicProcedures, testUser } from '~~/tests/testProcedures'

describe('User Procedure Tests', async () => {
  // vi.mock('../../prisma/seed')

  test('getUsers Procedure - Returns a list of registered users', async () => {
    prisma.user.findMany.mockResolvedValue([testUser])

    const response = await testPublicProcedures().user.getUsers()

    type UserResponse = inferProcedureOutput<AppRouter['user']['getUsers']>

    const expectation: UserResponse = {
      type: 'ok',
      data: [testUser],
    }

    expect(response).toEqual(expectation)
  })
  test('getUsers Procedure - Returns an error when there are no users', async () => {
    const response = await testPublicProcedures().user.getUsers()

    expect(response).toContain({ type: 'error' })
  })
  test('Auth Procedure - Verifies a logged in user', async () => {
    const response = await testProtectedProcedures().user.isAuthed()

    type AuthResponse = inferProcedureOutput<AppRouter['user']['isAuthed']>

    const expectation: AuthResponse = {
      type: 'ok',
      data: 'you are authed!',
    }

    expect(response).toEqual(expectation)
  })
})
