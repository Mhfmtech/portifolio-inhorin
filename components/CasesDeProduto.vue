<template>
  <section class="cases-section" id="cases">
    <div class="container">
      <h2 class="text-h3 mb-8 elegant-title">{{ t('cases.title') }}</h2>
      <p class="text-body-1 section-subtitle text-center mb-10">
        {{ t('cases.subtitle') }}
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
              <b>{{ t('cases.labels.problema') }}:</b> {{ caseItem.problema }}
            </p>
            <p class="case-text">
              <b>{{ t('cases.labels.decisao') }}:</b> {{ caseItem.decisao }}
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
          <v-btn icon dark @click="fecharModal" :aria-label="t('cases.modal.close')">
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
                  <h3 class="modal-section-title">{{ t('cases.modal.contexto') }}</h3>
                  <p class="modal-section-text">{{ caseSelecionado?.problema }}</p>
                </div>

                <div class="modal-section">
                  <h3 class="modal-section-title">{{ t('cases.modal.decisao') }}</h3>
                  <p class="modal-section-text">{{ caseSelecionado?.decisao }}</p>
                </div>

                <div class="modal-section">
                  <h3 class="modal-section-title">{{ t('cases.modal.impacto') }}</h3>
                  <ul class="impact-list">
                    <li v-for="(it, idx) in caseSelecionado?.impactos" :key="idx">
                      {{ it }}
                    </li>
                  </ul>
                </div>

                <div class="modal-section">
                  <h3 class="modal-section-title">{{ t('cases.modal.papel') }}</h3>
                  <p class="modal-section-text">{{ caseSelecionado?.papel }}</p>
                </div>

                <div v-if="caseSelecionado?.processo?.length" class="modal-section">
                  <h3 class="modal-section-title">{{ t('cases.modal.processo') }}</h3>
                  <ul class="impact-list">
                    <li v-for="(it, idx) in caseSelecionado?.processo" :key="`processo-${idx}`">
                      {{ it }}
                    </li>
                  </ul>
                </div>

                <div v-if="caseSelecionado?.desafios?.length" class="modal-section">
                  <h3 class="modal-section-title">{{ t('cases.modal.desafios') }}</h3>
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

const { t } = useI18n()
const { resolvedTm } = useResolvedTm()

const categoriaAtiva = ref('todos')
const modalAberto = ref(false)
const caseSelecionado = ref(null)

const categorias = computed(() => [
  { id: 'todos', nome: t('cases.categories.todos') },
  { id: 'crescimento', nome: t('cases.categories.crescimento') },
  { id: 'eficiencia', nome: t('cases.categories.eficiencia') },
  { id: 'experiencia', nome: t('cases.categories.experiencia') },
  { id: 'plataforma', nome: t('cases.categories.plataforma') },
])

const caseBlueprint = [
  { id: 'gs1-migracao', key: 'gs1', objetivoId: 'plataforma', imagem: gs1Img },
  { id: 'brasil-em-codigo-plataforma-evento', key: 'brasil', objetivoId: 'eficiencia', imagem: brasilCodigoImg },
  { id: 'mylegis-evolucao-rebranding', key: 'mylegis', objetivoId: 'experiencia', imagem: mylegisImg },
]

const cases = computed(() =>
  caseBlueprint.map((bp) => {
    const base = `cases.items.${bp.key}`
    return {
      id: bp.id,
      titulo: t(`${base}.titulo`),
      objetivoId: bp.objetivoId,
      objetivo: t(`cases.objectives.${bp.objetivoId}`),
      imagem: bp.imagem,
      problema: t(`${base}.problema`),
      decisao: t(`${base}.decisao`),
      impactos: resolvedTm(`${base}.impactos`),
      papel: t(`${base}.papel`),
      processo: resolvedTm(`${base}.processo`),
      desafios: resolvedTm(`${base}.desafios`),
      artefatos: resolvedTm(`${base}.artefatos`),
    }
  }),
)

const casesFiltrados = computed(() => {
  if (categoriaAtiva.value === 'todos') return cases.value
  return cases.value.filter((c) => c.objetivoId === categoriaAtiva.value)
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

