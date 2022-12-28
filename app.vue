<script setup lang="ts">
import { store } from './store'

const { user, getUsers } = store()

onMounted(async () => {
  await getUsers()
})
</script>

<template>
  <NuxtLayout>
    <div v-if="user">
      {{ user }}
    </div>
    <Packages />
  </NuxtLayout>
</template>
