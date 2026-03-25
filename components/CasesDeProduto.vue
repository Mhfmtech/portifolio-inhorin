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
                  <h3 class="modal-section-title">Decisão</h3>
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

                <div v-if="caseSelecionado?.processo?.length" class="modal-section">
                  <h3 class="modal-section-title">Processo</h3>
                  <ul class="impact-list">
                    <li v-for="(it, idx) in caseSelecionado?.processo" :key="`processo-${idx}`">
                      {{ it }}
                    </li>
                  </ul>
                </div>

                <div v-if="caseSelecionado?.desafios?.length" class="modal-section">
                  <h3 class="modal-section-title">Desafios</h3>
                  <ul class="impact-list">
                    <li v-for="(it, idx) in caseSelecionado?.desafios" :key="`desafio-${idx}`">
                      {{ it }}
                    </li>
                  </ul>
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

import gs1Img from '~/assets/cases/gs1-case.png'
import brasilCodigoImg from '~/assets/cases/brasil-em-codigo-case.png'
import mylegisImg from '~/assets/cases/mylegis-case.png'

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
      'O ecossistema digital da GS1 Brasil dependia de uma solução legada (SharePoint), com baixa flexibilidade para evolução do produto e limitações na integração com sistemas críticos. Isso impactava a velocidade de evolução da plataforma, a experiência do usuário (principalmente na área logada) e a capacidade de integração com CRM e automações.',
    decisao:
      'Conduzi junto a equipe de trabalho a migração da plataforma para uma arquitetura moderna baseada em CMS desacoplado e front-end performático. Definindo requisitos funcionais e técnicos, priorizei integrações críticas (área logada, CRM, pagamentos e RPAs), estruturei um plano de transição progressiva e garanti continuidade operacional durante a migração.',
    impactos: [
      'Unificação da base de conteúdo.',
      'Aceleração na evolução do produto digital.',
      'Redução de retrabalho em integrações.',
      'Maior consistência entre sistemas.',
      'Melhoria na estabilidade da experiência do usuário logado.'
    ],
    papel:
      'Atuei como Product Owner com discovery junto a stakeholders de múltiplas áreas, definição e priorização de backlog, tradução de necessidades do negócio em requisitos técnicos, interface com fornecedores, acompanhamento de entregas/validações e alinhamento contínuo entre times técnicos e de negócio. No monitoramento e na geração de insights, utilizei Analytics e Hotjar; para construção e desenho de fluxo de jornada, utilizei Miro.',
    processo: [
      'Diagnóstico do cenário atual: identificação de limitações do ambiente legado e mapeamento de dependências técnicas.',
      'Estruturação da solução: definição da arquitetura alvo e priorização das entregas com maior impacto.',
      'Planejamento da transição: construção de roadmap evolutivo e definição das etapas de migração.',
      'Execução e acompanhamento: gestão de backlog, validação contínua de entregas e ajustes conforme necessidades do negócio.'
    ],
    desafios: [
      'Complexidade de integração com múltiplos sistemas.',
      'Dependência de fornecedores externos.',
      'Necessidade de manter a operação ativa durante a migração.',
      'Alinhamento entre áreas com prioridades diferentes.'
    ],
    artefatos: ['Analytics e Hotjar (monitoramento/insights)', 'Miro (fluxo de jornada)', 'Requisitos funcionais e técnicos', 'Roadmap de migração', 'Backlog priorizado', 'Rituais de alinhamento']
  },
  {
    id: 'brasil-em-codigo-plataforma-evento',
    titulo: 'Brasil em Código - Evolução da Plataforma de Evento',
    objetivoId: 'eficiencia',
    objetivo: 'Eficiência',
    imagem: brasilCodigoImg,
    problema:
      'O site do Brasil em Código tinha layout defasado, estrutura engessada para edição e alta dependência de fornecedor externo, gerando lentidão na publicação, dificuldade para atualizar programação/inscrições e baixa autonomia do time interno.',
    decisao:
      'Conduzi a evolução da plataforma com foco em autonomia e agilidade operacional: levantei dores do negócio, defini escopo da solução, homologuei novo fornecedor e validei propostas técnicas com aderência ao contexto do evento.',
    impactos: [
      'Aumento significativo na autonomia do time interno.',
      'Redução da dependência de fornecedores para atualizações.',
      'Maior agilidade na publicação de conteúdos e atualizações do evento.',
      'Melhor adaptação às necessidades dinâmicas do evento.',
      'Evolução visual da plataforma com layout mais moderno e adaptável.'
    ],
    papel:
      'Atuação como Product Owner na ponta: levantamento de dores, estruturação do escopo, captação/homologação de fornecedor, condução de alinhamentos técnico-estratégicos, validação de protótipos e coordenação do time interno de conteúdo até a entrega. Para monitoramento e geração de insights, utilizei Analytics e Hotjar; para construção e desenho de fluxo de jornada, utilizei Miro.',
    processo: [
      'Diagnóstico: identificação de gargalos operacionais e mapeamento de dependências com fornecedor atual.',
      'Estruturação: definição de requisitos funcionais (FRP) e alinhamento de expectativas com stakeholders.',
      'Seleção de fornecedor: prospecção, avaliação e homologação da melhor proposta.',
      'Validação: análise de protótipos, ajustes e garantia de aderência ao negócio.',
      'Execução: coordenação de conteúdo interno (texto/imagem), atualização e publicação do novo site.'
    ],
    desafios: [
      'Captação e validação de um novo fornecedor.',
      'Alinhamento entre múltiplas áreas internas.',
      'Tradução das necessidades do negócio em requisitos claros.',
      'Garantia de entrega dentro do contexto e timing do evento.'
    ],
    artefatos: ['Analytics e Hotjar (monitoramento/insights)', 'Miro (fluxo de jornada)', 'FRP', 'Homologação de fornecedor', 'Validação de protótipos', 'Rituais de alinhamento']
  },
  {
    id: 'mylegis-evolucao-rebranding',
    titulo: 'MyLegis - Evolução Contínua e Rebranding da Plataforma',
    objetivoId: 'experiencia',
    objetivo: 'Experiência',
    imagem: mylegisImg,
    problema:
      'A plataforma MyLegis precisava evoluir continuamente para acompanhar necessidades de negócio e melhorar a experiência do usuário. Havia oportunidades de melhoria na usabilidade, hierarquia de informação pouco eficiente e necessidade de maior clareza na navegação, além da necessidade de estruturar melhor o fluxo de demandas do produto.',
    decisao:
      'Conduzi a evolução contínua da plataforma com foco em usabilidade e reorganização da experiência por meio de rebranding do layout. Reestruturei o visual para melhorar hierarquia de informação, priorizei melhorias com base no comportamento do usuário e organizei o fluxo de demandas/backlog com um processo contínuo de evolução.',
    impactos: [
      'Melhoria na experiência do usuário.',
      'Maior clareza na navegação e uso da plataforma.',
      'Processo mais estruturado de evolução do produto.',
      'Redução de fricções na jornada.',
      'Maior previsibilidade nas entregas.'
    ],
    papel:
      'Atuei como Product Owner na gestão do produto: coordenação de atividades, execuções e entregas; organização e priorização de backlog (Asana); acompanhamento de melhorias contínuas; condução de testes e validações; análise de comportamento com Analytics e Hotjar; e interface entre áreas envolvidas.',
    processo: [
      'Análise de comportamento: uso de Analytics e Hotjar para identificar fricções na jornada.',
      'Definição de melhorias: priorização por impacto e estruturação do backlog no Asana.',
      'Rebranding: revisão da hierarquia de informação e redefinição do layout/organização visual.',
      'Execução e validação: acompanhamento das entregas, testes e validações antes de publicação.'
    ],
    desafios: [
      'Equilibrar evolução visual com continuidade do produto.',
      'Priorizar melhorias em um cenário de demandas contínuas.',
      'Traduzir dados de comportamento em decisões práticas.',
      'Alinhar expectativas entre áreas envolvidas.'
    ],
    artefatos: ['Analytics e Hotjar', 'Backlog no Asana', 'Hipóteses de melhoria', 'Testes e validações', 'Rebranding de layout']
  },
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

