// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/test-utils/module', '@nuxt/content'],
  css: ['./assets/css/main.css'],
  app: {
    head: {
      title: 'Smart Home QA Demo',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  content: {
    renderer: {
      anchorLinks: {
        h1: true,
        h2: true,
        h3: true,
        h4: true,
      },
    },
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },
      },
    },
  },
})
