import type { PrismaClient } from '@prisma/client'
import { beforeEach } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'

const prismaMock = mockDeep<PrismaClient>()

export default prismaMock

beforeEach(() => {
  mockReset(prismaMock)
})
