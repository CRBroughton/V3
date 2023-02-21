<script setup lang="ts">
import { store } from './store'

const { users, getUsers } = store()
const { status, data, signIn, signOut } = useSession()

onMounted(async () => {
  await getUsers()
})

const signUserOut = async () => {
  await signOut()
}

const signUserIn = async () => {
  const runtimeConfig = useRuntimeConfig()
  await signIn('github', { callbackUrl: runtimeConfig.VITE_ORIGIN as string })
}
</script>

<template>
  <NuxtLayout>
    {{ users }}
    <Packages />
    <button v-if="status === 'unauthenticated'" @click="signUserIn">
      Sign in
    </button>
    <button v-if="status === 'authenticated'" @click="signUserOut">
      Log out
    </button>
    <div v-if="data">
      <GithubUser :name="data.user?.name" :image="data.user?.image" :data="data" />
    </div>
  </NuxtLayout>
</template>
