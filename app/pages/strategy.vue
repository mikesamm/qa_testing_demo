<template>
  <ContentRenderer
    v-if="strategy"
    :value="strategy"
  />
  <h1 v-else>Something went wrong.</h1>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: strategy } = await useAsyncData(route.path, () => {
  return queryCollection('docs').first()
})

useSeoMeta({
  title: strategy.value?.title || 'Strategy',
  description:
    strategy.value?.description || 'Strategy for the Leviton QA Demo',
})
</script>
