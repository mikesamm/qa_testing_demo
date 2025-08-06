<template>
  <div class="flex flex-col items-center space-y-4">
    <div
      id="big-single-light"
      :style="{ border: '1px solid', borderColor: borderColor }"
    ></div>
    <USlider
      v-model="intensity"
      orientation="vertical"
      class="h-48"
    />
    <p>Dimmer</p>
  </div>
</template>

<script setup lang="ts">
const intensity = ref(0)
const colorMode = useColorMode()

const borderColor = computed(() => {
  return colorMode.value === 'dark' ? 'white' : '#0f172b'
})
</script>
