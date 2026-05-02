<template>
  <v-app-bar
    class="custom-header"
    flat
    :elevation="0"
  >
    <div class="header-content">
      <div class="logo">
        <NuxtLink :to="localePath('/')" class="text-decoration-none">
          <img :src="logo2" alt="Logo" class="header-logo" loading="lazy" />
        </NuxtLink>
      </div>
      
      <!-- Menu Desktop -->
      <nav class="nav-menu d-none d-md-flex align-center" aria-label="Principal">
        <v-btn
          v-for="item in menuItems"
          :key="item.to"
          variant="text"
          color="white"
          @click="scrollToSection(item.to)"
        >
          {{ item.text }}
        </v-btn>

        <div class="lang-switch d-flex align-center ml-2" role="group" :aria-label="t('lang.switchTo')">
          <NuxtLink
            :to="switchLocalePath('pt-BR')"
            class="lang-link lang-link--with-flag"
            :class="{ active: locale === 'pt-BR' }"
          >
            <span class="lang-flag" aria-hidden="true">
              <svg class="flag-svg flag-svg--br" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="14" fill="#009b3a" />
                <path d="M10 1.8 17.2 7 10 12.2 2.8 7z" fill="#ffdf00" />
                <circle cx="10" cy="7" r="2.9" fill="#002776" />
                <path
                  d="M10 5.1c.9.5 1.6 1.4 1.8 2.4-.4-.3-.9-.5-1.4-.5s-1 .2-1.4.5c.2-1 1-1.9 1.8-2.4z"
                  fill="#fff"
                />
              </svg>
            </span>
            {{ t('lang.pt') }}
          </NuxtLink>
          <span class="lang-sep" aria-hidden="true">|</span>
          <NuxtLink
            :to="switchLocalePath('en-US')"
            class="lang-link lang-link--with-flag"
            :class="{ active: locale === 'en-US' }"
          >
            <span class="lang-flag" aria-hidden="true">
              <svg class="flag-svg flag-svg--us" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">
                <rect width="19" height="10" fill="#b22234" />
                <path
                  fill="#fff"
                  d="M0 1.43h19v.71H0zm0 1.43h19v.71H0zm0 1.43h19v.71H0zm0 1.43h19v.71H0zm0 1.43h19v.71H0z"
                />
                <rect width="7.6" height="5" fill="#3c3b6e" />
                <g fill="#fff">
                  <circle cx="1.1" cy="0.9" r="0.35" />
                  <circle cx="2.5" cy="0.9" r="0.35" />
                  <circle cx="3.9" cy="0.9" r="0.35" />
                  <circle cx="5.3" cy="0.9" r="0.35" />
                  <circle cx="6.7" cy="0.9" r="0.35" />
                  <circle cx="1.8" cy="1.8" r="0.35" />
                  <circle cx="3.2" cy="1.8" r="0.35" />
                  <circle cx="4.6" cy="1.8" r="0.35" />
                  <circle cx="6" cy="1.8" r="0.35" />
                  <circle cx="2.5" cy="2.7" r="0.35" />
                  <circle cx="3.9" cy="2.7" r="0.35" />
                  <circle cx="5.3" cy="2.7" r="0.35" />
                  <circle cx="4.6" cy="3.6" r="0.35" />
                </g>
              </svg>
            </span>
            {{ t('lang.en') }}
          </NuxtLink>
        </div>
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
      <v-divider class="my-2" />
      <v-list-item @click="navigateTo(switchLocalePath('pt-BR')); drawer = false">
        <template #prepend>
          <span class="lang-flag lang-flag--drawer" aria-hidden="true">
            <svg class="flag-svg flag-svg--br" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="14" fill="#009b3a" />
              <path d="M10 1.8 17.2 7 10 12.2 2.8 7z" fill="#ffdf00" />
              <circle cx="10" cy="7" r="2.9" fill="#002776" />
              <path
                d="M10 5.1c.9.5 1.6 1.4 1.8 2.4-.4-.3-.9-.5-1.4-.5s-1 .2-1.4.5c.2-1 1-1.9 1.8-2.4z"
                fill="#fff"
              />
            </svg>
          </span>
        </template>
        <v-list-item-title>{{ t('lang.pt') }}</v-list-item-title>
      </v-list-item>
      <v-list-item @click="navigateTo(switchLocalePath('en-US')); drawer = false">
        <template #prepend>
          <span class="lang-flag lang-flag--drawer" aria-hidden="true">
            <svg class="flag-svg flag-svg--us" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">
              <rect width="19" height="10" fill="#b22234" />
              <path
                fill="#fff"
                d="M0 1.43h19v.71H0zm0 1.43h19v.71H0zm0 1.43h19v.71H0zm0 1.43h19v.71H0zm0 1.43h19v.71H0z"
              />
              <rect width="7.6" height="5" fill="#3c3b6e" />
              <g fill="#fff">
                <circle cx="1.1" cy="0.9" r="0.35" />
                <circle cx="2.5" cy="0.9" r="0.35" />
                <circle cx="3.9" cy="0.9" r="0.35" />
                <circle cx="5.3" cy="0.9" r="0.35" />
                <circle cx="6.7" cy="0.9" r="0.35" />
                <circle cx="1.8" cy="1.8" r="0.35" />
                <circle cx="3.2" cy="1.8" r="0.35" />
                <circle cx="4.6" cy="1.8" r="0.35" />
                <circle cx="6" cy="1.8" r="0.35" />
                <circle cx="2.5" cy="2.7" r="0.35" />
                <circle cx="3.9" cy="2.7" r="0.35" />
                <circle cx="5.3" cy="2.7" r="0.35" />
                <circle cx="4.6" cy="3.6" r="0.35" />
              </g>
            </svg>
          </span>
        </template>
        <v-list-item-title>{{ t('lang.en') }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed, ref } from 'vue'
import logo2 from '~/assets/logo2.png'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const drawer = ref(false)

const menuItems = computed(() => [
  { text: t('nav.inicio'), to: '#inicio' },
  { text: t('nav.cases'), to: '#cases' },
  { text: t('nav.processo'), to: '#processo' },
  { text: t('nav.impacto'), to: '#impacto' },
  { text: t('nav.contato'), to: '#contato' },
])

const scrollToSection = async (sectionId) => {
  const homePath = localePath('/')
  if (route.path !== homePath) {
    await navigateTo({ path: homePath, hash: sectionId })
    return
  }
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

.lang-switch {
  gap: 0.35rem;
  padding-left: 0.5rem;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.lang-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.25rem 0.35rem;
  border-radius: 6px;
  transition: color 0.2s ease, background 0.2s ease;
}

.lang-link--with-flag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.lang-flag {
  display: inline-flex;
  flex-shrink: 0;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
  line-height: 0;
}

.lang-flag--drawer {
  margin-right: 4px;
}

.flag-svg {
  width: 22px;
  height: auto;
  display: block;
}

.flag-svg--br {
  aspect-ratio: 20 / 14;
}

.flag-svg--us {
  aspect-ratio: 19 / 10;
}

.lang-flag--drawer .flag-svg {
  width: 26px;
}

.lang-link:hover {
  color: #fff;
  background: rgba(100, 200, 255, 0.15);
}

.lang-link.active {
  color: #8fd4ff;
}

.lang-sep {
  color: rgba(255, 255, 255, 0.35);
  user-select: none;
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
