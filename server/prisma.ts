import { PrismaClient } from '@prisma/client'
import { envConfig } from '~~/envConfig'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma
 || new PrismaClient({
   log: envConfig.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
 })

if (envConfig.NODE_ENV !== 'production')
  globalForPrisma.prisma = prisma
