<template>
  <v-app>
    <Header />
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
const route = useRoute()
const { locale, t } = useI18n()
const siteUrl = 'https://www.mauroh.com.br'

const canonical = computed(() => `${siteUrl}${route.path}`)

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [{ rel: 'canonical', href: canonical.value }],
  meta: [
    { name: 'description', content: t('meta.description') },
    { name: 'keywords', content: t('meta.keywords') },
    { property: 'og:title', content: t('meta.ogTitle') },
    { property: 'og:description', content: t('meta.ogDescription') },
    { property: 'og:url', content: canonical.value },
    { name: 'twitter:title', content: t('meta.ogTitle') },
    { name: 'twitter:description', content: t('meta.twitterDescription') },
  ],
}))
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style> 