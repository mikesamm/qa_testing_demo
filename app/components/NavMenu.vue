<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Dashboard',
    icon: 'i-lucide-layout-dashboard',
    to: '/',
  },
  {
    label: 'Strategy',
    icon: 'i-lucide-notebook-pen',
    to: '/strategy',
  },
  {
    label: 'Reports',
    icon: 'i-lucide-clipboard-check',
    to: '/reports',
  },
  {
    label: 'GitHub',
    icon: 'i-lucide-github',
    to: 'https://github.com/mikesamm/qa_testing_demo',
    target: '_blank',
  },
])
</script>

<template>
  <UNavigationMenu
    :items="items"
    class="w-full justify-center"
  />
</template>
