import { PrismaClient } from '@prisma/client'

const runtimeConfig = useRuntimeConfig()

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma
 || new PrismaClient({
   log: runtimeConfig.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
 })

if (runtimeConfig.NODE_ENV !== 'production')
  globalForPrisma.prisma = prisma
