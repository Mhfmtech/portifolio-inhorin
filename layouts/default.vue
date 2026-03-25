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
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style> 