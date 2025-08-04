<template>
  <UButton
    @click="buttonClick"
    data-testid="switch-toggle"
  >
    ON/OFF Switch
  </UButton>
  <span data-testid="switch-label">
    {{ isOn ? 'ON' : 'OFF' }}
  </span>
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
