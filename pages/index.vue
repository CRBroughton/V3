<script setup lang="ts">
import { store } from '~~/store'

const { users, getUsers } = store()
const { status, data, signIn, signOut } = useAuth()

onMounted(async () => {
  await getUsers()
})

async function signUserOut() {
  await signOut()
}

async function signUserIn() {
  const runtimeConfig = useRuntimeConfig()
  await signIn('auth0', { callbackUrl: runtimeConfig.NUXT_AUTH_ORIGIN as string })
}
</script>

<template>
  {{ users }}
  <Packages />
  <button v-if="status === 'unauthenticated'" @click="signUserIn">
    Sign in
  </button>
  <button v-if="status === 'authenticated'" @click="signUserOut">
    Log out
  </button>

  <a href="/authtest">
    Test protected page
  </a>
  <div v-if="data">
    <GithubUser :name="data.user?.name" :image="data.user?.image" />
  </div>
</template>
