import { describe, expect, test } from 'vitest'
import type { inferProcedureOutput } from '@trpc/server'
import type { AppRouter } from '~~/server/api/router'
import UserBuilder from '~~/server/builders/UserBuilder'
import { testProtectedProcedures, testPublicProcedures } from '~~/tests/testProcedures'

describe('User Procedure Tests', async () => {
  test('getUsers Procedure - Returns a list of registered users', async () => {
    const response = await testPublicProcedures().user.getUsers()

    const { user: testUser, setUserID, setUserName, setUserEmail } = UserBuilder()

    setUserID('97527cbe-2de0-40cd-a953-8caae780e66e')
    setUserName('Craig Broughton')
    setUserEmail('craig.broughton@email.com')

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
