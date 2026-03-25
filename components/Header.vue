<template>
  <v-app-bar
    class="custom-header"
    flat
    :elevation="0"
  >
    <div class="header-content">
      <div class="logo">
        <NuxtLink to="/" class="text-decoration-none">
          <img :src="logo2" alt="Logo" class="header-logo" loading="lazy" />
        </NuxtLink>
      </div>
      
      <!-- Menu Desktop -->
      <nav class="nav-menu d-none d-md-flex">
        <v-btn
          v-for="item in menuItems"
          :key="item.to"
          variant="text"
          color="white"
          @click="scrollToSection(item.to)"
        >
          {{ item.text }}
        </v-btn>
      </nav>

      <!-- Botão Menu Mobile -->
      <v-app-bar-nav-icon
        class="d-md-none"
        color="white"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </div>
  </v-app-bar>

  <!-- Drawer Menu Mobile -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    theme="light"
    width="250"
  >
    <v-list density="compact">
      <v-list-item
        v-for="item in menuItems"
        :key="item.to"
        :value="item.text"
        @click="scrollToSection(item.to); drawer = false"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import logo2 from '~/assets/logo2.png'

const drawer = ref(false)

const menuItems = [
  { text: 'Início', to: '#inicio' },
  { text: 'Cases', to: '#cases' },
  { text: 'Processo', to: '#processo' },
  { text: 'Impacto', to: '#impacto' },
  { text: 'Contato', to: '#contato' }
]

const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.custom-header {
  background: rgba(0, 0, 0, 0.2) !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.v-toolbar__content) {
  padding: 0 !important;
}

.header-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo span {
  color: white;
  font-family: 'Outfit', sans-serif;
  letter-spacing: -0.02em;
  font-size: 1.5rem;
}

.header-logo {
  height: 150px;
  width: auto;
  filter: brightness(0) invert(1);
  padding: 8px 0;
}

.nav-menu {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: none;
  transition: all 0.3s ease;
  opacity: 0.9;
  position: relative;
}

.nav-btn:hover {
  transform: translateY(-2px);
  background: rgba(100, 200, 255, 0.1) !important;
  opacity: 1;
}

.nav-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: rgba(100, 200, 255, 0.8);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-btn:hover::after {
  width: 80%;
}

:deep(.v-btn__content) {
  color: white !important;
  transition: color 0.3s ease;
}

.nav-btn:hover :deep(.v-btn__content) {
  color: rgba(100, 200, 255, 0.9) !important;
}

:deep(.v-btn) {
  background: transparent !important;
  transition: all 0.3s ease !important;
}

:deep(.v-btn:hover) {
  background: rgba(100, 200, 255, 0.3) !important;
}

:deep(.v-btn--variant-text) {
  background: transparent !important;
}

:deep(.v-btn--variant-text:hover) {
  background: rgba(100, 200, 255, 0.3) !important;
}

:deep(.v-btn--variant-outlined:hover) {
  background: rgba(100, 200, 255, 0.3) !important;
  border-color: rgba(100, 200, 255, 0.8) !important;
}

:deep(.v-btn--variant-elevated:hover) {
  background: rgba(100, 200, 255, 0.3) !important;
}

/* Ajustes responsivos */
@media (max-width: 960px) {
  .header-logo {
    height: 100px;
  }
  
  .header-content {
    padding: 0.5rem 1rem;
  }
}
</style> 