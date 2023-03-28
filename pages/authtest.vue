<script setup lang="ts">
const { $client } = useNuxtApp()
const { data, error } = await $client.user.isAuthed.useQuery()
</script>

<template>
  <p v-if="data">
    {{ data.data }}
  </p>
  <NuxtErrorBoundary>
    <div v-if="error">
      {{ error.message }}
      <button @click="clearError({ redirect: '/' })">
        Go back
      </button>
    </div>
  </NuxtErrorBoundary>
</template>

<style scoped>

</style>
