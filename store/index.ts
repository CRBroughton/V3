import type { User } from '@prisma/client'
import { match } from 'ts-pattern'

export const store = () => {
  const { $client } = useNuxtApp()
  const users = ref<User[]>([])
  const user = ref<User>()

  const getUsers = async () => {
    const { type, error, data } = await $client.user.getUsers.query()

    match(type)
      .with(
        'error',
        () => { throw new Error(error?.message) },
      )
      .with(
        'ok',
        () => { users.value = data! },
      )
      .exhaustive()
  }

  const createUser = async (input: User) => {
    const { type, error, data } = await $client.user.createUser.mutate(input)

    match(type)
      .with(
        'error',
        () => { throw new Error(error?.message) },
      )
      .with(
        'ok',
        () => { user.value = data! },
      )
      .exhaustive()
  }

  return {
    user,
    createUser,
    getUsers,
  }
}
