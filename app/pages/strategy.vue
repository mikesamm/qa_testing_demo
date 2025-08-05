<template>
  <div class="centered-content">
    <ContentRenderer
      v-if="strategy"
      :value="strategy"
      class="markdown flex flex-col justify-center"
    />
    <h1 v-else>Something went wrong.</h1>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: strategy } = await useAsyncData(route.path, () => {
  return queryCollection('docs').first()
})

useSeoMeta({
  title: strategy.value?.title || 'Strategy',
  description: strategy.value?.description || 'Strategy for the QA Demo',
})
</script>

<style scoped>
.centered-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
