<template>
  <div class="about-container">
    <div class="timeline-container">
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

    <div class="skills-container">
      <h2>Habilidades e Ferramentas</h2>
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
  </div>
</template>

<script setup>
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
</script>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

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

.skills-container {
  margin-top: 4rem;
}

.skills-container h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

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