import { describe, expect, test } from 'vitest'
import type { inferProcedureOutput } from '@trpc/server'
import type { AppRouter } from '~~/server/api/router'
import UserBuilder from '~~/server/builders/UserBuilder'
import { testProtectedProcedures, testPublicProcedures } from '~~/tests/testProcedures'

describe('User Procedure Tests', async () => {
  test('getUsers Procedure - Returns a list of registered users', async () => {
    const response = await testPublicProcedures().user.getUsers()

    const testUser = new UserBuilder()
      .setID('97527cbe-2de0-40cd-a953-8caae780e66e')
      .setName('Craig Broughton')
      .setEmail('craig.broughton@email.com')
      .build()

      type UserResponse = inferProcedureOutput<AppRouter['user']['getUsers']>

      const expectation: UserResponse = {
        type: 'ok',
        data: [{ ...testUser }],
      }

      expect(response).toEqual(expectation)
  })
  test('Auth Procedure - Verifies a logged in user', async () => {
    const response = await testProtectedProcedures().user.isAuthed()

    expect(response).toEqual('you are authed!')
  })
})
