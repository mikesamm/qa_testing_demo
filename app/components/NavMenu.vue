<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: '',
    icon: 'i-lucide-house',
    to: '/',
  },
  {
    label: 'Strategy',
    icon: 'i-lucide-notebook-pen',
    to: '/strategy',
  },
  {
    label: 'Test Suite',
    icon: 'i-lucide-clipboard-check',
    to: '/testSuite',
  },
  {
    label: 'Dashboard',
    icon: 'i-lucide-layout-dashboard',
    to: '/dashboard',
  },
  {
    label: 'GitHub',
    icon: 'i-lucide-github',
    to: 'https://github.com/mikesamm/qa_testing_demo',
    target: '_blank',
  },
  {
    label: 'Resume',
    icon: 'i-lucide-file-text',
    to: 'https://drive.google.com/file/d/1tXCj5pms76qdF2iVVo_i0w3PiScjtFaR/view?usp=drive_link',
    target: '_blank',
  },
])
</script>

<template>
  <UNavigationMenu
    :items="items"
    class="flex flex-row sm:flex-wrap justify-center"
  />
</template>
