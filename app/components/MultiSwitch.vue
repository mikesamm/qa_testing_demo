<template>
  <div>
    <UButtonGroup
      class="max-w-32px"
      orientation="vertical"
      size="lg"
    >
      <UButton
        v-for="(label, index) in labels"
        :key="index"
        variant="subtle"
        :label="label"
      />
    </UButtonGroup>
  </div>
</template>

<script setup lang="ts">
const { labels } = defineProps<{
  labels: string[]
}>()
</script>
