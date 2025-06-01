<template>
  <v-app-bar
    class="custom-header"
    flat
    :elevation="0"
  >
    <div class="header-content">
      <div class="logo">
        <NuxtLink to="/" class="text-decoration-none">
          <img :src="logo2" alt="Logo" class="header-logo" />
        </NuxtLink>
      </div>
      <nav class="nav-menu">
        <v-btn
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          variant="text"
          class="nav-btn"
          color="white"
        >
          {{ item.text }}
        </v-btn>
      </nav>
    </div>
  </v-app-bar>
</template>

<script setup>
import logo2 from '~/assets/logo2.png'

const menuItems = [
  { text: 'Início', to: '/' },
  { text: 'Sobre', to: '/sobre' },
  { text: 'Projetos', to: '/projetos' },
  { text: 'Contato', to: '/contato' }
]
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
</style> 