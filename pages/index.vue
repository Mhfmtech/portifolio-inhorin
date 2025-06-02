<template>
  <div>
    <Banner id="inicio" />
    <!-- About Section -->
    <v-container id="sobre" class="py-16">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <h2 class="text-h3 text-center text-md-left mb-8">Sobre Mim</h2>
          <p class="text-body-1 text-center text-md-left mb-4">
            Como profissional graduado em Propaganda e Marketing pela Universidade Paulista (UNIP-SJC), trago uma visão estratégica e uma paixão pela tecnologia para o universo do marketing digital. Minha jornada profissional se consolidou na intersecção entre a prática e planejamento estratégico de marketing, gerenciamento de projetos web e liderança de equipes.
          </p>
          <p class="text-body-1 text-center text-md-left mb-4">
            Sou proficiente em desenvolvimento front-end, com expertise em HTML, CSS, Vue.js e Ionic, o que me permite não apenas idealizar, mas também construir e otimizar soluções digitais. Minhas habilidades se estendem ao WordPress, design de Experiência do Usuário (UX) e à prototipagem e construção de Interfaces de Usuário (UI), com domínio de ferramentas como Figma e Webflow. Além disso, possuo vasto conhecimento em análise de dados e otimização, utilizando Hotjar e Google Analytics para insights acionáveis. Tive a oportunidade de gerenciar projetos de ponta a ponta, desde o desenvolvimento e implantação até a documentação pré e pós-lançamento, sempre incorporando as melhores práticas de branding, marketing e design.
          </p>
          <p class="text-body-1 text-center text-md-left">
            Impulsionado pela busca por resultados e por uma abordagem inovadora e colaborativa, estou sempre atento às tendências e melhores práticas do cenário atual do marketing. Busco desafios que demandem criatividade, pensamento estratégico e habilidades técnicas para gerar impacto e valor.
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <div class="image-container">
            <v-img
              :src="mauroImage"
              alt="Mauro"
              class="about-image"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Projects Section -->
    <ProjetosRecentes />

    <!-- Contact Section -->
    <v-container id="contato" class="py-16">
      <h2 class="text-h3 text-center mb-12">Entre em Contato</h2>
      <v-row justify="center">
        <v-col cols="12" md="6" class="d-flex justify-center">
          <!-- Ícones das Redes Sociais e WhatsApp -->
          <v-btn icon size="large" href="https://github.com/Mhfmtech" target="_blank" class="contact-icon-btn">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon size="large" href="https://www.linkedin.com/in/mauro-henrique-faria-moreira-7b57bb15a/" target="_blank" class="contact-icon-btn">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon size="large" href="https://www.instagram.com/mauro__henrique/" target="_blank" class="contact-icon-btn">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon size="large" href="https://wa.me/5512982833941" target="_blank" class="contact-icon-btn">
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import Banner from '~/components/Banner.vue'
import ProjetosRecentes from '~/components/ProjetosRecentes.vue'
import mauroImage from '~/assets/mauro.jpg'

definePageMeta({
  title: 'Início'
})
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.about-image {
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 100%;
  height: auto;
}

.about-image:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

@media (max-width: 960px) {
  .text-md-left {
    text-align: center !important;
  }
}

/* Estilos para os ícones de contato */
.contact-icon-btn {
  background: rgba(255, 255, 255, 0.15) !important; /* Fundo branco semi-transparente */
  backdrop-filter: blur(8px); /* Efeito de blur no fundo */
  -webkit-backdrop-filter: blur(8px);
  border-radius: 50% !important; /* Deixa o background redondo */
  transition: all 0.3s ease; /* Transição suave para efeitos de hover */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Borda sutil */
  margin: 0 10px; /* Adicionando margem horizontal */
}

.contact-icon-btn:hover {
  background: rgba(255, 255, 255, 0.25) !important; /* Aumenta a opacidade no hover */
  border-color: rgba(255, 255, 255, 0.4) !important; /* Borda mais visível no hover */
  transform: translateY(-3px); /* Efeito de leve levantamento */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Sombra suave no hover */
}

/* Cor do ícone */
.contact-icon-btn :deep(.v-icon) {
  color: white !important; /* Garante que a cor do ícone seja branca */
}
</style> 