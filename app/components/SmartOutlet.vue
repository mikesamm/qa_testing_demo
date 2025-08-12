<template>
  <div class="flex flex-col items-center space-y-4">
    <div
      id="outlet"
      class="flex flex-col justify-center"
    >
      Smart Outlet
    </div>
    <UButton
      @click="buttonClick"
      data-testid="switch-toggle"
    >
      {{ isOn ? 'Turn OFF' : 'Turn ON' }}
    </UButton>
    <p>Outlet Toggle</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDisabled = ref(false)
const isOn = ref(false)

const buttonClick = () => {
  if (!isDisabled.value) {
    isOn.value = !isOn.value
  }
  console.log('Switch toggled:', isOn.value ? 'ON' : 'OFF')
}
</script>

<style scoped>
button {
  z-index: 1000;
}
</style>
