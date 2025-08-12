<template>
  <div clas="flex flex-col items-center space-x-4">
    <div
      id="breakers"
      class="mb-4"
    >
      <div class="circuit-breaker flex flex-row justify-center">Breaker 1</div>
      <div class="circuit-breaker flex flex-row justify-center">Breaker 2</div>
      <div class="circuit-breaker flex flex-row justify-center">Breaker 3</div>
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
    <p>Breaker Toggles</p>
  </div>
</template>

<script setup lang="ts">
const { labels } = defineProps<{
  labels: string[]
}>()
</script>
