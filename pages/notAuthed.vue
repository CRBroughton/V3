<script setup lang="ts">
const { $client } = useNuxtApp()

const checkIfAuthed = async () => {
  return await $client.user.isAuthed.query()
}

await checkIfAuthed()
</script>

<template>
  <p>You're authed to see this page</p>
</template>

<style scoped>

</style>
