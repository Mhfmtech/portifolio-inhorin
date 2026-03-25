<template>
  <section class="cases-section" id="cases">
    <div class="container">
      <h2 class="text-h3 mb-8 elegant-title">Cases de Produto</h2>
      <p class="text-body-1 section-subtitle text-center mb-10">
        Contexto → Decisão → Impacto. O que eu analisei, como cheguei nas escolhas e quais evidências/aprendizados vieram da entrega.
      </p>

      <div class="filtro-container mb-8">
        <div class="filtro-tabs">
          <v-btn
            v-for="categoria in categorias"
            :key="categoria.id"
            :color="categoriaAtiva === categoria.id ? 'primary' : 'transparent'"
            variant="text"
            class="filtro-btn"
            @click="categoriaAtiva = categoria.id"
          >
            {{ categoria.nome }}
          </v-btn>
        </div>
      </div>

      <div class="cases-grid">
        <div
          v-for="caseItem in casesExibidos"
          :key="caseItem.id"
          class="case-card"
          @click="abrirModal(caseItem)"
          role="button"
          tabindex="0"
          @keydown.enter="abrirModal(caseItem)"
        >
          <div class="case-media">
            <v-img :src="caseItem.imagem" :lazy-src="caseItem.imagem" cover height="220" loading="lazy" />
          </div>

          <div class="case-body">
            <div class="case-chip-row">
              <v-chip size="small" variant="outlined" class="case-chip">
                {{ caseItem.objetivo }}
              </v-chip>
            </div>

            <h3 class="case-title">{{ caseItem.titulo }}</h3>
            <p class="case-text">
              <b>Problema:</b> {{ caseItem.problema }}
            </p>
            <p class="case-text">
              <b>Decisão:</b> {{ caseItem.decisao }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <v-dialog
      v-model="modalAberto"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-card class="modal-card">
        <v-toolbar class="modal-toolbar">
          <v-btn icon dark @click="fecharModal" aria-label="Fechar">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="modal-title">{{ caseSelecionado?.titulo }}</v-toolbar-title>
          <v-spacer />
          <v-chip v-if="caseSelecionado" size="small" variant="outlined" class="case-chip">
            {{ caseSelecionado.objetivo }}
          </v-chip>
        </v-toolbar>

        <div class="modal-content">
          <v-row class="w-100" justify="center">
            <v-col cols="12" md="5">
              <v-img :src="caseSelecionado?.imagem" class="modal-image" cover />
            </v-col>

            <v-col cols="12" md="7">
              <div class="modal-details">
                <div class="modal-section">
                  <h3 class="modal-section-title">Contexto</h3>
                  <p class="modal-section-text">{{ caseSelecionado?.problema }}</p>
                </div>

                <div class="modal-section">
                  <h3 class="modal-section-title">Decisão que eu liderei</h3>
                  <p class="modal-section-text">{{ caseSelecionado?.decisao }}</p>
                </div>

                <div class="modal-section">
                  <h3 class="modal-section-title">Impacto gerado</h3>
                  <ul class="impact-list">
                    <li v-for="(it, idx) in caseSelecionado?.impactos" :key="idx">
                      {{ it }}
                    </li>
                  </ul>
                </div>

                <div class="modal-section">
                  <h3 class="modal-section-title">Meu papel</h3>
                  <p class="modal-section-text">{{ caseSelecionado?.papel }}</p>
                </div>

                <div class="modal-artifacts">
                  <v-chip
                    v-for="(tag, idx) in caseSelecionado?.artefatos"
                    :key="idx"
                    size="small"
                    class="artifact-chip"
                    variant="flat"
                  >
                    {{ tag }}
                  </v-chip>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

import gs1Img from '~/assets/web/pagina 4 portifolio.jpg'
import techLeadImg from '~/assets/web/pagina 8 portifolio.jpg'
import martechImg from '~/assets/Design/flip.jpg'
import rebrandingImg from '~/assets/marca/pandora.jpg'

const categoriaAtiva = ref('todos')
const modalAberto = ref(false)
const caseSelecionado = ref(null)

const categorias = [
  { id: 'todos', nome: 'Todos' },
  { id: 'crescimento', nome: 'Crescimento' },
  { id: 'eficiencia', nome: 'Eficiência' },
  { id: 'experiencia', nome: 'Experiência' },
  { id: 'plataforma', nome: 'Plataforma' }
]

const cases = [
  {
    id: 'gs1-migracao',
    titulo: 'GS1 Brasil - Migração e integrações',
    objetivoId: 'plataforma',
    objetivo: 'Plataforma',
    imagem: gs1Img,
    problema:
      'O ecossistema digital dependia de uma solução legada (SharePoint), com baixa agilidade para evoluir o site e integrar funcionalidades críticas (logado, dados e automações).',
    decisao:
      'Liderei a migração para uma arquitetura moderna com Strapi + Next.js, definindo requisitos, priorizando integrações (área logada, CRM, pagamentos e RPAs) e criando um caminho de transição com foco em continuidade.',
    impactos: [
      'Unificamos a base de conteúdo e aceleramos a evolução do produto digital.',
      'Integrações ficaram mais consistentes, reduzindo retrabalho e dependência operacional.',
      'A experiência do usuário logado ganhou estabilidade e previsibilidade.'
    ],
    papel:
      'Product Owner na prática: discovery com stakeholders, definição de escopo, priorização de backlog, acompanhamento de entrega e validação pós-release.',
    artefatos: ['PRD leve', 'Critérios de sucesso', 'Plano de transição', 'Rituais de alinhamento']
  },
  {
    id: 'tech-lead-sprint-kpis',
    titulo: 'Tech Lead - Entrega com KPIs e cadência',
    objetivoId: 'eficiencia',
    objetivo: 'Eficiência',
    imagem: techLeadImg,
    problema:
      'O time dependia de priorização pouco previsível e decisões reativas, o que impactava cadência, qualidade e previsibilidade de entregas.',
    decisao:
      'Estruturei o ciclo de decisão com planejamento de sprints, acompanhamento de KPIs e priorização baseada em impacto, esforço e dependências.',
    impactos: [
      'Melhoramos a previsibilidade de entregas com backlog mais claro e negociado.',
      'Reduzimos retrabalho ao alinhar critérios antes de iniciar o desenvolvimento.',
      'Criamos um padrão de aprendizado: cada release gerava evidência para a próxima decisão.'
    ],
    papel:
      'Liderança de produto e execução: definição de prioridades, gestão de comunicação com stakeholders e acompanhamento de indicadores.',
    artefatos: ['Roadmap prático', 'RICE/MoSCoW (equivalente)', 'KPIs', 'Sprints + review']
  },
  {
    id: 'martech-performance-ux',
    titulo: 'Martech - Otimização com dados e UX',
    objetivoId: 'experiencia',
    objetivo: 'Experiência',
    imagem: martechImg,
    problema:
      'Havia ganho de tráfego, mas o processo de validação do que melhorar no produto era lento: decisões dependiam mais de percepção do que de evidência.',
    decisao:
      'Conectei analytics/Hotjar com uma cadência de experimentação: hipóteses, medição e ajustes em pontos críticos da jornada do usuário.',
    impactos: [
      'Aumentamos a capacidade de aprender rápido com menos risco.',
      'Melhoramos fricções do percurso, aumentando clareza e consistência da experiência.',
      'Transformamos dados em decisões que viraram backlog.'
    ],
    papel:
      'PO orientado a evidência: desenho de hipóteses, definição de métricas, priorização de melhorias e validação pós-entrega.',
    artefatos: ['Métricas e eventos', 'Mapa de jornada', 'Hipóteses', 'Backlog de experimentos']
  },
  {
    id: 'rebranding-cordial',
    titulo: 'Rebranding - Identidade que sustenta produto',
    objetivoId: 'crescimento',
    objetivo: 'Crescimento',
    imagem: rebrandingImg,
    problema:
      'A marca precisava atualizar sua proposta para sustentar a evolução do produto digital e melhorar percepção do valor para o público.',
    decisao:
      'Estruturei o direcionamento do rebranding e garanti coerência com a experiência: identidade visual aplicada aos pontos de contato e alinhamento de linguagem para reduzir ambiguidade.',
    impactos: [
      'Aumentamos consistência e clareza de comunicação em interfaces e materiais.',
      'Facilitamos a evolução do produto digital com uma base visual coerente.',
      'Fortalecemos a percepção de valor do usuário a partir da identidade.'
    ],
    papel:
      'Condução do produto e UX: definição do direcionamento, priorização das adaptações e acompanhamento da aplicação da identidade.',
    artefatos: ['Direção criativa', 'Checklist de consistência', 'Guia de aplicação', 'Validação com stakeholders']
  }
]

const casesFiltrados = computed(() => {
  if (categoriaAtiva.value === 'todos') return cases
  return cases.filter((c) => c.objetivoId === categoriaAtiva.value)
})

const casesExibidos = computed(() => casesFiltrados.value)

const abrirModal = (item) => {
  caseSelecionado.value = item
  modalAberto.value = true
}

const fecharModal = () => {
  modalAberto.value = false
  caseSelecionado.value = null
}
</script>

<style scoped>
.cases-section {
  padding: 6rem 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.85);
  max-width: 900px;
  margin: 0 auto;
}

.elegant-title {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  color: white;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.filtro-container {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 auto;
  max-width: fit-content;
}

.filtro-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filtro-btn {
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: none;
  transition: all 0.3s ease;
  color: white !important;
  border-radius: 8px;
  padding: 8px 24px;
}

.filtro-btn:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  transform: translateY(-2px);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.case-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.case-card:hover {
  transform: translateY(-5px);
}

.case-media {
  width: 100%;
  height: 220px;
}

.case-body {
  padding: 1.25rem 1.25rem 1.5rem;
  color: white;
}

.case-chip-row {
  margin-bottom: 0.75rem;
}

.case-chip {
  color: white !important;
}

.case-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

.case-text {
  margin: 0.4rem 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.55;
  font-size: 0.95rem;
}

.case-text b {
  color: white;
  font-weight: 800;
}

.modal-card {
  background: rgba(0, 0, 0, 0.95) !important;
}

.modal-toolbar {
  background: rgba(0, 0, 0, 0.2) !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: white !important;
}

.modal-title {
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: white;
}

.modal-content {
  height: calc(100vh - 64px);
  overflow: auto;
  padding: 2rem;
}

.modal-image {
  border-radius: 16px;
  max-height: 70vh;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45);
}

.modal-details {
  padding: 0.25rem 1rem;
}

.modal-section {
  margin-bottom: 1.25rem;
}

.modal-section-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.05rem;
}

.modal-section-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.7;
}

.impact-list {
  margin: 0;
  padding-left: 1.25rem;
  color: rgba(255, 255, 255, 0.82);
}

.modal-artifacts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.artifact-chip {
  background: rgba(100, 200, 255, 0.12);
  border: 1px solid rgba(100, 200, 255, 0.25);
  color: white !important;
}

@media (max-width: 960px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .container {
    padding: 0 1.25rem;
  }

  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>

