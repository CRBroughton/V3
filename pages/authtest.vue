<script setup lang="ts">
const { $client } = useNuxtApp()
const { data, error } = await $client.user.isAuthed.useQuery()

if (!data.value && error.value) {
  showError(
    {
      statusCode: error.value?.data?.httpStatus,
      statusMessage: error.value?.data?.code,
    },
  )
}
</script>

<template>
  <p v-if="data">
    {{ data }}
  </p>
</template>

<style scoped>

</style>
