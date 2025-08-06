<template>
  <div clas="flex flex-col items-center space-x-4">
    <div
      id="breakers"
      class="mb-4"
    >
      <div class="circuit-breaker"></div>
      <div class="circuit-breaker"></div>
      <div class="circuit-breaker"></div>
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
    <p>Circuit Breaker Switches</p>
  </div>
</template>

<script setup lang="ts">
const { labels } = defineProps<{
  labels: string[]
}>()
</script>
