<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Dashboard',
    icon: 'i-lucide-book-open',
    to: '/',
  },
  {
    label: 'Strategy',
    icon: 'i-lucide-database',
    to: '/strategy',
  },
  {
    label: 'Reports',
    icon: 'i-lucide-box',
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
