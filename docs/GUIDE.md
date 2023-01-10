# V3 - Guide

## Introduction

The V3 stack was born both out of a frustration with type-unsafe code,
as well as discovering the inspiring T3 stack, and as an exercise to deliver a similar experience with Vue.

In V3, types flow from the Prisma database schema, acting as a global contract, directing the applications type-safety; from this schema, we can validate our back end implementation, as well as use the same types for our front end implementation.

```
Type Source of Truth Map:

Prisma Schema-->|--> Database Table(migrations)
                |--> TRPC-Router(validated with Zod)-->Vue 3(promises)
                |--> Vue 3(imported types)
```

## Prisma

Prisma enables several core features of V3, including data modelling, automatic
migration generation and a type safe client.

First, describe your Prisma schema via Models, which will be used to create your
database migrations. 


```typescript
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

// datasource db {
//   provider = "postgresql"
//   url      = env("DATABASE_URL")
// }

model User {
  id String @id @default(uuid())
  name String
  email String
  tasks Task[]
}

model Task {
  id String @id @default(uuid())
  owner User @relation(fields: [ownerId], references: [id])
  ownerId String
  title String
  description String?
}
```

With your models defined, Prisma can then automatically create new migrations for your
database with `pnpm run prisma:migrate`. You can then begin to use the type safe Prisma
client to interact with your database (see TRPC section below).


## TRPC

TRPC is one of the core components of V3, enabling database querys, mutations and client requests. In V3, TRPC is directly paired with both Prisma and Zod to ensure all are type safe.

A typical flow for a TRPC router may look like:

```typescript
// server/api/routers/user
import { z } from 'zod'
import type { User } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { publicProcedure, router } from '../../trpc'
import type { ValidatePrisma } from '../../../utils/validatePrisma'

// A TRPC router example
export const userRouter = router({
  // Procedures are functional 'endpoints'
  // A router can have any number of procedures
  getUsers: publicProcedure
    .query(async (req) => {
      // Types-safe prisma client
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
    // Client input, validated by TypeScript with Zod
    .input(z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
    }) satisfies z.Schema<User>)
    // Database 'mutations', validate through Prisma
    .mutation(async (req) => {
      // Create a new user on our database
      const user = req.ctx.prisma.user.create<ValidatePrisma<User>>({
        data: req.input,
      })
      return user
    }),
})

```

These type-safe routers are then exported through a global router object, where a global AppRouter type is generated for the front-end:

```typescript
//server/api/router.ts
import { router } from './trpc'
import { userRouter } from './routers/user'

// This appRouter can contain any number of defined routers
export const appRouter = router({
  user: userRouter,
})

// Creates a global AppRouter type
export type AppRouter = typeof appRouter
```
With our AppRouter type available, the front-end can now import this type
into the TRPC client router:

```typescript
// Types imported from TRPC & Prisma
import type { User } from '@prisma/client'

export const store = () => {
  // Get the TRPC client instance
  const { $client } = useNuxtApp()
  // A type-safe User array; This same type
  // is used to validate the servers TRPC procedure client input
  const users = ref<User[]>()

  const getUsers = async () => {
    const { type, error, data } = await $client.user.getUsers.query()

    // Type-safe match operator using ts-pattern
    user.value
     = match(type)
        .with(
          'error',
          () => { throw new Error(error?.message) },
        )
        .with(
          'ok',
          () => { return data! },
        )
        .exhaustive()
  }

  // Creating a type-safe call to our createUser procedure
  const createUser = async (name: string, email: string) => {
    // Here you can see the front end accessing the 'user' router
    await $client.user.createUser({ id: Math.random().toString(), name, email })
    await getAllUsers()
  }

  return {
    users,
    getUsers,
    createUser,
  }
}
```