<script setup lang="ts">
const { $client } = useNuxtApp()
const user = await $client.user.getUsers.useQuery()

const compuser = user.data.value
</script>

<template>
  <NuxtLayout>
    <Packages />
  </NuxtLayout>
</template>
