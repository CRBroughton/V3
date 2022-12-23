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

## TRPC

TRPC is one of the core components of V3, enabling database querys, mutations and client requests. In V3, TRPC is directly paired with both Prisma and Zod to ensure all are type safe.

A typical flow for a TRPC router may look like:

```typescript
// server/routers/user
import { z } from 'zod'
import { User } from '@prisma/client'
import { publicProcedure, router } from '../../trpc'

// A TRPC router example
export const userRouter = router({
  // Procedures are functional 'endpoints'
  // A router can have any number of procedures
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
      const user = req.ctx.prisma.user.create({
        data: req.input,
      })
      return user
    }),
})

```

These type-safe routers are then exported through a global router object, where a global AppRouter type is generated for the front-end:

```typescript
//server/router.ts
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
import type { AppRouter } from '@server/router'
import type { User } from '@prisma/client'
// A simple wrapper to instantiate the TRPC client
import { useTRPCClient } from '../composables'

export const store = () => {
  // A type-safe User array; This same type
  // is used to validate the servers TRPC procedure client input
  const users = ref<User[]>()

  // The TRPC AppRouter type exposes all our procedures
  const { trpc } = useTRPCClient<AppRouter>(import.meta.env.VITE_TRPC_URL)

  // Creating a type-safe call to our createUser procedure
  const createUser = async (name: string, email: string) => {
    // Here you can see the front end accessing the 'user' router
    await trpc.user.createUser.mutate({ id: Math.random().toString(), name, email })
    await getAllUsers()
  }
  ...
}

```