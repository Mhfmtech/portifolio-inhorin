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
const menuItems = [
  { title: 'Sobre', to: '/#sobre' },
  { title: 'Projetos', to: '/#projetos' },
  { title: 'Contato', to: '/#contato' }
]
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style> 