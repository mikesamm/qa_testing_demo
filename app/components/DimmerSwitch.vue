<template>
  <div class="flex flex-col items-center space-y-4">
    <div
      id="big-single-light"
      class="flex flex-row justify-center items-center"
    >
      0%
    </div>
    <USlider
      v-model="brightness"
      orientation="vertical"
      class="h-48"
    />
    <p>Smart Dimmer</p>
  </div>
</template>

<script setup lang="ts">
const brightness = ref(0)
</script>
