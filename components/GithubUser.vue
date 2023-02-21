<script setup lang="ts">
const props = defineProps<{
  name?: string | null
  image?: string | null
}>()
</script>

<template>
  <div class="user-wrapper">
    <p>{{ props.name }}</p>
    <img v-if="props.image" :src="props.image" alt="Users Github Profile Image">
  </div>
</template>

<style scoped>
.user-wrapper {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

p {
    font-size: 24px;
}

img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
</style>
