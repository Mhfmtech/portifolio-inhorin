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

      <!-- Timeline Section -->
      <div class="timeline-container mt-16">
        <h2 class="text-h3 text-center mb-12">Minha Jornada</h2>
        <div class="timeline-item" v-for="(item, index) in timelineItems" :key="index">
          <div class="timeline-content" :class="{ 'right': index % 2 === 0 }">
            <div class="timeline-icon">
              <i :class="item.icon"></i>
            </div>
            <div class="timeline-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

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

const timelineItems = [
  {
    title: 'Início na Indústria',
    description: 'Comecei minha trajetória profissional ainda na indústria, mas aos 20 anos aceitei um desafio que mudaria completamente meu caminho: mergulhar no universo do desenvolvimento front-end.',
    icon: 'fas fa-industry'
  },
  {
    title: 'Formação em Marketing',
    description: 'Iniciei minha formação em Propaganda e Marketing e logo consegui um estágio em uma empresa especializada na venda de licenças de software e equipamentos de hardware.',
    icon: 'fas fa-graduation-cap'
  },
  {
    title: 'Coordenação Digital',
    description: 'Fui efetivado e assumi a coordenação das frentes digitais das duas empresas, organizando cronogramas de conteúdo, atualizações de sites e relatórios de desempenho.',
    icon: 'fas fa-tasks'
  },
  {
    title: 'Rebranding Cordial',
    description: 'Uma das minhas entregas mais marcantes foi o rebranding da Cordial Condomínios, criando o novo logo da marca e sua identidade visual completa.',
    icon: 'fas fa-paint-brush'
  },
  {
    title: 'Tech Lead',
    description: 'Fui promovido a Tech Lead e gerenciei um time com cerca de cinco desenvolvedores, lidando com planejamento de sprints, SCRUM, KPIs e cronogramas.',
    icon: 'fas fa-code-branch'
  },
  {
    title: 'Martech',
    description: 'Hoje atuo como profissional de Martech, sendo responsável por gerenciar múltiplos sites e plataformas web, coordenando fornecedores de tecnologia.',
    icon: 'fas fa-chart-line'
  }
];

const skillCategories = [
  {
    title: 'Desenvolvimento',
    skills: ['Vue.js', 'Ionic', 'WordPress', 'Webflow', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Design',
    skills: ['Photoshop', 'Premiere Pro', 'DaVinci', 'Filmora', 'Branding', 'UI/UX']
  },
  {
    title: 'Análise',
    skills: ['Google Analytics', 'Hotjar', 'CRM', 'KPIs', 'SCRUM']
  }
];

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
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #e8f0fe;
  color: #4a90e2;
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
</style> 