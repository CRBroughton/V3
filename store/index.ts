import type { User } from '@prisma/client'
import { match } from 'ts-pattern'

export const store = () => {
  const { $client } = useNuxtApp()
  const user = ref<User[]>()

  const getUsers = async () => {
    const response = await $client.user.getUsers.query()

    user.value
     = match(response)
        .with(
          { type: 'error' },
          () => { throw new Error(response.error?.message) },
        )
        .with(
          { type: 'ok' },
          () => { return response.data! },
        )
        .exhaustive()
  }

  return {
    user,
    getUsers,
  }
}
