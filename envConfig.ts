import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  VITE_TRPC_URL: z.string().url().default('http://localhost:5000/trpc'),
  DATABASE_URL: z.string().url().nonempty(),
  DATABASE_NAME: z.string().nonempty(),
  DATABASE_USER: z.string().nonempty(),
  DATABASE_PASSWORD: z.string().nonempty().min(16),
  NUXT_SECRET: z.string().nonempty().min(16),
  AUTH_ORIGIN: z.string().url().default('http://localhost:3000'),
  NUXT_AUTH0_CLIENT_ID: z.string().optional(),
  NUXT_AUTH0_CLIENT_SECRET: z.string().optional(),
  NUXT_AUTH0_ISSUER: z.string().url().optional(),
})

const parsedSchema = envSchema.safeParse(process.env)

if (parsedSchema.success === false) {
  console.error('😔 Your env is invalid!',
    parsedSchema.error.flatten().fieldErrors)
  throw new Error('😔 Your env is invalid!')
}

export const envConfig = parsedSchema.data
