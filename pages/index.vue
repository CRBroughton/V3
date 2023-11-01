<script setup lang="ts">
const usersStore = userStore()
const { status, data, signIn, signOut } = useAuth()

onMounted(() => {
  usersStore.getUsers()
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
  {{ usersStore.users }}
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
