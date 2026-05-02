<template>
  <div>
    <Banner id="inicio" />

    <!-- Cases, Processo e Impacto (prioridade para recrutadores) -->
    <CasesDeProduto />

    <v-container id="processo" class="py-16">
      <h2 class="text-h3 text-center mb-12">{{ t('home.processo.title') }}</h2>
      <v-row justify="center" class="mb-10">
        <v-col cols="12" md="10">
          <p class="text-body-1 text-center mb-0">
            {{ t('home.processo.intro') }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="(etapa, idx) in processoEtapas" :key="idx" cols="12" md="6">
          <v-card class="decision-card" variant="flat">
            <div class="decision-card-head">
              <div class="decision-index">0{{ idx + 1 }}</div>
              <div class="decision-icon-wrap" aria-hidden="true">
                <v-icon :icon="etapa.icon" size="28" class="decision-icon" />
              </div>
            </div>
            <h3 class="decision-title">{{ etapa.titulo }}</h3>
            <p class="decision-text">{{ etapa.texto }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="impacto" class="py-16">
      <h2 class="text-h3 text-center mb-12">{{ t('home.impacto.title') }}</h2>
      <v-row justify="center" class="mb-10">
        <v-col cols="12" md="10">
          <p class="text-body-1 text-center mb-0">
            {{ t('home.impacto.intro') }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="(item, idx) in impactoCards" :key="idx" cols="12" md="4">
          <v-card class="impact-card" variant="outlined">
            <h3 class="impact-title">{{ item.titulo }}</h3>
            <p class="impact-text">{{ item.texto }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="diferencial" class="py-16">
      <h2 class="text-h3 text-center mb-12">{{ t('home.diferencial.title') }}</h2>
      <v-row justify="center" class="mb-10">
        <v-col cols="12" md="10">
          <p class="text-body-1 text-center mb-0">
            {{ t('home.diferencial.intro') }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="(b, idx) in diferencialBullets" :key="idx" cols="12" md="6" lg="3">
          <v-card class="diff-card" variant="flat">
            <p class="diff-bullet">{{ b }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- About Section -->
    <v-container id="sobre-old" class="py-16 d-none">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <h2 class="text-h3 text-center text-md-left mb-8">Sobre Mim</h2>
          <p class="text-body-1 text-center text-md-left mb-4">
            Graduado em Propaganda e Marketing pela Universidade Paulista UNIP, trago uma visão
            estratégica e uma paixão pela tecnologia para o universo do marketing. Minha jornada profissional se
            consolidou na intersecção entre a prática e planejamento, gerenciamento de projetos
            web e liderança de equipes.
          </p>
          <p class="text-body-1 text-center text-md-left mb-4">
            Sou proficiente em desenvolvimento front-end, com expertise em HTML, CSS, Vue.js e Ionic, o que me permite
            não apenas idealizar, mas também construir e otimizar soluções digitais. Minhas habilidades se estendem a CMS's
            como WordPress, Webflow, design de Experiência do Usuário (UX) e à prototipagem e construção de Interfaces de Usuário
            (UI), com domínio de ferramentas como Figma, Miro entre outras.
          </p>
          <p class="text-body-1 text-center text-md-left">
            Impulsionado pela busca por resultados e por uma abordagem inovadora e colaborativa, estou sempre atento às
            tendências e melhores práticas do cenário atual do marketing. Busco desafios que demandem criatividade,
            pensamento estratégico e habilidades técnicas para gerar impacto e valor.
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <div class="image-container">
            <v-img :src="mauroImage" alt="Mauro" class="about-image"></v-img>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-16" justify="center" align="center">
        <v-col cols="12" md="4" class="d-flex justify-center align-center">
          <div class="square-animation"></div>

        </v-col>
        <v-col cols="12" md="6">
          <!-- <h2 class="text-h3 text-center text-md-left mb-8">Sobre Mim</h2> -->
          <p class="text-body-1 text-center text-md-left mb-4">
            Comecei minha trajetória profissional ainda na indústria, mas aos 20 anos aceitei um desafio que mudaria
            completamente meu caminho: <b>mergulhar no universo do desenvolvimento front-end. Foi ali que despertei meu
              interesse por tecnologia e comecei a estudar programação, atuando como desenvolvedor júnior em projetos
              variados entre 2015 e 2017.</b>
          </p>

        </v-col>



        <v-col cols="12" md="6">
          <!-- <h2 class="text-h3 text-center text-md-left mb-8">Sobre Mim</h2> -->
          <p class="text-body-1 text-center text-md-left mb-4 mt-16">
            Após me formar com uma base sólida em comunicação, design, audiovisual e web, retomei o foco em tecnologia
            atuando como web designer e front-end em uma consultoria de marketing. Desenvolvi sites e sistemas para
            diversos clientes, lidando com integrações de CRM, CMSs como WordPress, Directus e Strapi, além de
            participar do planejamento técnico e da documentação das soluções. Fui promovido a Tech Lead, liderando um
            time de desenvolvedores com foco em entregas, sprints e KPIs.
<br> <br>
            Mais tarde, assumi uma posição no corporativo como profissional de Martech, gerenciando sites e plataformas
            web, coordenando fornecedores e garantindo a eficiência das implementações. Destaque para a refatoração do
            site da GS1 Brasil, onde liderei a migração de SharePoint para uma arquitetura moderna com Strapi e Next.js,
            integrando área logada, CRM, pagamentos e RPAs.
            <br>
            Hoje, atuo na intersecção entre tecnologia, Marketing/design e estratégia, com domínio de ferramentas como Vue.js,
            Ionic, WordPress, Webflow, Google Analytics e Hotjar. No audiovisual, utilizo Premiere Pro, DaVinci, Filmora
            e Photoshop. Acredito que bons produtos digitais nascem do equilíbrio entre pessoas, dados, processos e
            tecnologia.
          </p>
        </v-col>

        <v-col cols="12" md="4" class="d-flex justify-center align-center">
          <div class="circle-animation"></div>

        </v-col>

      </v-row>

      <v-row class="mt-16" justify="center" align="center">
        <v-col cols="12" md="12">

        </v-col>
      </v-row>

      <!-- Timeline Section -->


      <!-- Skills Section -->
      <div class="skills-container mt-16">
        <h2 class="text-h3 text-center mb-12">Habilidades e Ferramentas</h2>
        <div class="skills-grid">
          <div class="skill-category" v-for="(category, index) in skillCategories" :key="index">
            <h3>{{ category.title }}</h3>
            <div class="skill-tags">
              <span v-for="(skill, skillIndex) in category.skills" :key="skillIndex" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </v-container>

    <!-- Projetos (removido no reposicionamento PO) -->

    <!-- Sobre (na prática) -->
    <v-container id="sobre" class="py-16">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <h2 class="text-h3 text-center text-md-left mb-8">{{ t('home.sobre.title') }}</h2>
          <p class="text-body-1 text-center text-md-left mb-6">
            {{ t('home.sobre.p1') }}
          </p>
          <p class="text-body-1 text-center text-md-left mb-6">
            {{ t('home.sobre.p2') }}
          </p>
          <p class="text-body-1 text-center text-md-left mb-6">
            {{ t('home.sobre.p3') }}
          </p>
          <p class="text-body-1 text-center text-md-left mb-0">
            {{ t('home.sobre.p4') }}
          </p>

          <div class="marcos-grid">
            <div v-for="(m, idx) in marcos" :key="idx" class="marco">
              <div class="marco-title">{{ m.titulo }}</div>
              <div class="marco-text">{{ m.texto }}</div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="image-container">
            <v-img :src="mauroImage" alt="Mauro" class="about-image"></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Section -->
    <v-container id="contato" class="py-16">
      <h2 class="text-h3 text-center mb-12">{{ t('home.contato.title') }}</h2>
      <v-row justify="center" class="mb-8">
        <v-col cols="12" md="8">
          <p class="text-body-1 text-center mb-0">
            {{ t('home.contato.intro') }}
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6" class="d-flex justify-center">
          <!-- Ícones das Redes Sociais e WhatsApp -->
          <v-btn icon size="large" href="https://github.com/Mhfmtech" target="_blank" class="contact-icon-btn" :aria-label="t('home.a11y.github')">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon size="large" href="https://www.linkedin.com/in/mauro-henrique-faria-moreira-7b57bb15a/"
            target="_blank" class="contact-icon-btn" :aria-label="t('home.a11y.linkedin')">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon size="large" href="https://www.instagram.com/mauro__henrique/" target="_blank"
            class="contact-icon-btn" :aria-label="t('home.a11y.instagram')">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon size="large" href="https://wa.me/5512982833941" target="_blank" class="contact-icon-btn" :aria-label="t('home.a11y.whatsapp')">
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Banner from '~/components/Banner.vue'
import CasesDeProduto from '~/components/CasesDeProduto.vue'
import mauroImage from '~/assets/mauro.jpg'

const { t } = useI18n()
const { resolvedTm } = useResolvedTm()

useHead(() => ({
  title: t('meta.pageTitleHome'),
}))

const processoIcons = [
  'mdi-compass-outline',
  'mdi-clipboard-search-outline',
  'mdi-flask-outline',
  'mdi-swap-vertical',
  'mdi-rocket-launch-outline',
]

const processoEtapas = computed(() => {
  const etapas = resolvedTm('home.processo.etapas')
  if (!Array.isArray(etapas)) return []
  return etapas.map((e, i) => ({
    titulo: e.titulo,
    texto: e.texto,
    icon: processoIcons[i] ?? 'mdi-circle-outline',
  }))
})

const impactoCards = computed(() => {
  const cards = resolvedTm('home.impacto.cards')
  return Array.isArray(cards) ? cards : []
})

const diferencialBullets = computed(() => {
  const bullets = resolvedTm('home.diferencial.bullets')
  return Array.isArray(bullets) ? bullets : []
})

const marcos = computed(() => {
  const m = resolvedTm('home.sobre.marcos')
  return Array.isArray(m) ? m : []
})

// Mantido apenas para evitar erros de renderização no bloco antigo de “Sobre” (agora oculto).
const skillCategories = []
</script>

<style scoped>
/* ********************************************* */

.square-animation {
  width: 150px;
  /* Tamanho do quadrado */
  height: 150px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(45deg, #ff00c6, #ff7200);
  /* Gradiente de fundo inicial */
  box-shadow: 0 0 20px rgba(255, 0, 198, 0.7);
  /* Sombra para dar profundidade */
  animation: pulse-square 4s infinite ease-in-out, rotateColors-square 10s infinite linear;
  /* Duas animações combinadas */
}

.square-animation::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(transparent 0%, rgba(255, 255, 255, 0.3) 10%, transparent 20%);
  /* Efeito de brilho rotativo */
  animation: spin-square 6s infinite linear;
  /* Animação de rotação */
  opacity: 0.8;
}

/* Animação de pulsação para o quadrado */
@keyframes pulse-square {
  0% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(255, 0, 198, 0.7);
  }

  50% {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(255, 0, 198, 0.9), 0 0 60px rgba(255, 114, 0, 0.7);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(255, 0, 198, 0.7);
  }
}

/* Animação para rotacionar as cores do gradiente de fundo do quadrado */
@keyframes rotateColors-square {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}

/* Animação de rotação do pseudo-elemento do quadrado */
@keyframes spin-square {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* ************************************************************** */

.circle-animation {
  width: 150px;
  /* Tamanho do círculo */
  height: 150px;
  border-radius: 50%;
  /* Transforma o div em um círculo */
  position: relative;
  /* Necessário para posicionar os pseudo-elementos */
  overflow: hidden;
  /* Garante que o gradiente não vaze */
  background: linear-gradient(45deg, #00c6ff, #0072ff);
  /* Gradiente de fundo inicial */
  box-shadow: 0 0 20px rgba(0, 198, 255, 0.7);
  /* Sombra para dar profundidade */
  animation: pulse 4s infinite ease-in-out, rotateColors 10s infinite linear;
  /* Duas animações combinadas */
}

/* Pseudo-elemento para criar um efeito de brilho ou "scan" */
.circle-animation::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(transparent 0%, rgba(255, 255, 255, 0.3) 10%, transparent 20%);
  /* Efeito de brilho rotativo */
  animation: spin 6s infinite linear;
  /* Animação de rotação */
  opacity: 0.8;
}

/* Animação de pulsação */
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(0, 198, 255, 0.7);
  }

  50% {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(0, 198, 255, 0.9), 0 0 60px rgba(0, 114, 255, 0.7);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(0, 198, 255, 0.7);
  }
}

/* Animação para rotacionar as cores do gradiente de fundo */
@keyframes rotateColors {
  0% {
    filter: hue-rotate(0deg);
    /* Começa com a cor original */
  }

  100% {
    filter: hue-rotate(360deg);
    /* Gira 360 graus no espectro de cores */
  }
}

/* Animação de rotação do pseudo-elemento */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* **** */
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
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 50% !important;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0 10px;
}

.contact-icon-btn:hover {
  background: rgba(255, 255, 255, 0.25) !important;
  border-color: rgba(255, 255, 255, 0.4) !important;
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.contact-icon-btn :deep(.v-icon) {
  color: white !important;
}

/* Timeline Styles */
.timeline-container {
  position: relative;
  margin: 4rem 0;
}

.timeline-container::before {
  content: '';
  position: absolute;
  width: 2px;
  background: #e0e0e0;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  padding: 2rem 0;
}

.timeline-content {
  position: relative;
  width: 45%;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.timeline-content.right {
  margin-left: auto;
}

.timeline-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  background: #4a90e2;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.timeline-content.right .timeline-icon {
  left: -60px;
}

.timeline-content:not(.right) .timeline-icon {
  right: -60px;
}

.timeline-text h3 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
}

.timeline-text p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

/* Skills Styles */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.53);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  margin: 0 0 1rem 0;
  color: #ffffff;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #cdd2d4;
  color: #184972;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .timeline-container::before {
    left: 30px;
  }

  .timeline-content {
    width: calc(100% - 80px);
    margin-left: 80px !important;
  }

  .timeline-icon {
    left: -60px !important;
    right: auto !important;
  }
}

/* PO: cards e escaneabilidade */
.decision-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 1.5rem;
  height: 100%;
}

.decision-card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.decision-index {
  color: #64c8ff;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0;
  line-height: 1;
}

.decision-icon-wrap {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(100, 200, 255, 0.12);
  border: 1px solid rgba(100, 200, 255, 0.28);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
}

.decision-icon {
  color: #8fd4ff !important;
  opacity: 0.95;
}

.decision-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.decision-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.65;
}

.impact-card {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12) !important;
  border-radius: 16px;
  padding: 1.25rem;
  height: 100%;
}

.impact-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.05rem;
}

.impact-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.65;
}

.diff-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 16px;
  padding: 1.25rem;
  height: 100%;
}

.diff-bullet {
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.65;
  font-weight: 500;
}

.marcos-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.marco {
  padding: 1rem 1.1rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
}

.marco-title {
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.marco-text {
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.55;
}

</style>