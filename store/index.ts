import type { User } from '@prisma/client'
import { match } from 'ts-pattern'

export function store() {
  const { $client } = useNuxtApp()
  const users = ref<User[]>([])

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

  return {
    users,
    getUsers,
  }
}
