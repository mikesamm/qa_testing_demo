<template>
  <button
    @click="console.log('Switch toggled')"
    data-testid="switch-toggle"
  >
    Toggle
  </button>
  <span data-testid="switch-label">{{ isOn ? 'ON' : 'OFF' }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOn = ref(false)
</script>
