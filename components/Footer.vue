<template>
  <footer class="custom-footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="logo">
          <span class="text-h6 font-weight-bold">Mauro</span>
        </div>
        <p class="description">Desenvolvedor Full Stack & UI/UX Designer</p>
      </div>
      
      <div class="footer-section social-links">
        <v-btn
          v-for="social in socialLinks"
          :key="social.icon"
          :href="social.link"
          target="_blank"
          icon
          variant="text"
          color="white"
          class="social-btn"
        >
          <v-icon>{{ social.icon }}</v-icon>
        </v-btn>
      </div>
      
      <div class="footer-section">
        <p class="copyright">© {{ new Date().getFullYear() }} Todos os direitos reservados</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  { icon: 'mdi-github', link: 'https://github.com/seu-usuario' },
  { icon: 'mdi-linkedin', link: 'https://linkedin.com/in/seu-usuario' },
  { icon: 'mdi-instagram', link: 'https://instagram.com/seu-usuario' },
  { icon: 'mdi-twitter', link: 'https://twitter.com/seu-usuario' }
]
</script>

<style scoped>
.custom-footer {
  background-color: transparent !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  font-family: 'Outfit', sans-serif;
  position: relative;
}

.custom-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  z-index: -1;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}

.footer-section {
  flex: 1;
  text-align: center;
}

.logo span {
  color: white;
  font-family: 'Outfit', sans-serif;
  letter-spacing: -0.02em;
  font-size: 1.25rem;
}

.description {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  opacity: 0.8;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-btn {
  transition: all 0.3s ease;
  background: transparent !important;
  color: white !important;
}

.social-btn:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.1) !important;
}

.copyright {
  font-size: 0.875rem;
  opacity: 0.8;
}

:deep(.v-btn__content) {
  color: white !important;
}

:deep(.v-btn) {
  background: transparent !important;
}

:deep(.v-btn--variant-text) {
  background: transparent !important;
}

:deep(.bg-primary) {
  background: transparent !important;
}

:deep(.v-theme--light) {
  background: transparent !important;
}

:deep(.v-application) {
  background: transparent !important;
}

@media (max-width: 960px) {
  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .footer-section {
    width: 100%;
  }
}
</style> 