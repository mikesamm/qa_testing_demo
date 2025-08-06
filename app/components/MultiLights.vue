<template>
  <div class="flex flex-col items-center space-y-4">
    <div id="multi-lights">
      <div class="single-light"></div>
      <div class="single-light"></div>
      <div class="single-light"></div>
    </div>
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
    <p>Scene Selection</p>
  </div>
</template>

<script setup lang="ts">
const { labels } = defineProps<{
  labels: string[]
}>()
</script>
