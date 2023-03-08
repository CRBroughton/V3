import type { Prisma } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    id: '97527cbe-2de0-40cd-a953-8caae780e66e',
    email: 'craig.broughton@email.com',
    name: 'Craig Broughton',
    image: '',
    accounts: {
      create: {
        provider: 'Google',
        type: 'Auth',
        providerAccountId: '1234',
      },
    },
  },
]

async function main() {
  // eslint-disable-next-line no-console
  console.log('Start seeding ...')
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    // eslint-disable-next-line no-console
    console.log(`Created user with id: ${user.id}`)
  }
  // eslint-disable-next-line no-console
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
