<template>
  <USlider
    v-model="intensity"
    orientation="vertical"
    class="h-48"
  />
</template>

<script setup lang="ts">
const intensity = ref(0)
</script>
