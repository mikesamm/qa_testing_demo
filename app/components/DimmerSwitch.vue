<template>
  <USlider
    v-model="intensity"
    default-value="0"
    orientation="vertical"
    class="h-48"
  />
</template>

<script setup lang="ts">
const intensity = ref(0)
</script>
