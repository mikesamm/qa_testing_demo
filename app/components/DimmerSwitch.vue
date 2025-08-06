<template>
  <div class="flex flex-col items-center space-y-4">
    <div id="big-single-light"></div>
    <USlider
      v-model="intensity"
      orientation="vertical"
      class="h-48"
    />
  </div>
</template>

<script setup lang="ts">
const intensity = ref(0)
</script>
