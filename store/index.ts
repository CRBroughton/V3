import type { User } from '@prisma/client'
import { match } from 'ts-pattern'

export const store = () => {
  const { $client } = useNuxtApp()
  const user = ref<User[]>([])

  const getUsers = async () => {
    const { type, error, data } = await $client.user.getUsers.query()

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

  return {
    user,
    getUsers,
  }
}
