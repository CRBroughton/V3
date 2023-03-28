import { describe, expect, test } from 'vitest'
import type { inferProcedureOutput } from '@trpc/server'
import type { AppRouter } from '~~/server/api/router'
import { testProtectedProcedures, testPublicProcedures, testUser } from '~~/tests/testProcedures'

describe('User Procedure Tests', async () => {
  test('getUsers Procedure - Returns a list of registered users', async () => {
    const response = await testPublicProcedures().user.getUsers()

    type UserResponse = inferProcedureOutput<AppRouter['user']['getUsers']>

    const expectation: UserResponse = {
      type: 'ok',
      data: [{ ...testUser }],
    }

    expect(response).toEqual(expectation)
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
