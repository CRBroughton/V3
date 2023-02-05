<script setup lang="ts">
import { store } from './store'

const { users, getUsers } = store()

onMounted(async () => {
  await getUsers()
})
</script>

<template>
  <NuxtLayout>
    {{ users }}
    <Packages />
  </NuxtLayout>
</template>
