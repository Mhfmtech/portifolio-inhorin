<template>
  <section class="projetos-recentes" id="projetos">
    <div class="container">
      <h2 class="text-h3 mb-8 elegant-title">Projetos Recentes</h2>
      
      <!-- Tabs de Filtro -->
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

      <!-- Grid de Projetos -->
      <div class="projetos-grid">
        <div 
          v-for="(projeto, index) in projetosExibidos" 
          :key="index" 
          class="projeto-card"
          @click="abrirModal(projeto)"
        >
          <div class="projeto-imagem">
            <v-img 
              v-if="!projeto.isVideo"
              :src="projeto.imagem" 
              cover 
              height="200"
            ></v-img>
            <video 
              v-else
              :src="projeto.imagem"
              controls
              class="projeto-video"
            ></video>
          </div>
          <div class="projeto-info">
            <h3 class="text-h5 mb-2">{{ projeto.titulo }}</h3>
            <p class="mb-4">{{ projeto.descricao }}</p>
          </div>
        </div>
      </div>

      <!-- Botão Carregar Mais -->
      <div v-if="temMaisProjetos" class="carregar-mais-container">
        <v-btn
          variant="outlined"
          class="carregar-mais-btn"
          @click="carregarMais"
        >
          Carregar Mais
        </v-btn>
      </div>
    </div>

    <!-- Modal de Visualização -->
    <v-dialog
      v-model="modalAberto"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-card class="modal-card">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="fecharModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ projetoSelecionado?.titulo }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <div class="modal-content">
          <div v-if="projetoSelecionado?.isVideo" class="video-container">
            <video
              :src="projetoSelecionado?.imagem"
              controls
              autoplay
              class="modal-video"
            ></video>
          </div>
          <v-img
            v-else
            :src="projetoSelecionado?.imagem"
            class="modal-image"
            contain
          ></v-img>
        </div>
      </v-card>
    </v-dialog>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categoriaAtiva = ref('todos')
const modalAberto = ref(false)
const projetoSelecionado = ref(null)
const projetosPorPagina = ref(6) // 2 linhas de 3 cards

const categorias = [
  { id: 'todos', nome: 'Todos' },
  { id: 'marca', nome: 'Marca' },
  { id: 'web', nome: 'Web' },
  { id: 'design', nome: 'Design' },
  { id: 'av', nome: 'Áudio Visual' }
]

// Importando imagens das pastas
const imagensMarca = import.meta.glob('~/assets/marca/*.{jpg,jpeg,png}', { eager: true })
const imagensWeb = import.meta.glob('~/assets/web/*.{jpg,jpeg,png}', { eager: true })
const imagensDesign = import.meta.glob('~/assets/Design/*.{jpg,jpeg,png}', { eager: true })
const imagensAv = import.meta.glob('~/assets/av/*.{mp4}', { eager: true })

const projetos = computed(() => {
  const projetosArray = []

  // Adicionando projetos de marca
  Object.entries(imagensMarca).forEach(([path, module]) => {
    projetosArray.push({
      titulo: 'Projeto de Marca',
      descricao: 'Desenvolvimento de identidade visual e branding',
      imagem: module.default,
      categoria: 'marca'
    })
  })

  // Adicionando projetos web
  Object.entries(imagensWeb).forEach(([path, module]) => {
    projetosArray.push({
      titulo: 'Projeto Web',
      descricao: 'Desenvolvimento de website responsivo',
      imagem: module.default,
      categoria: 'web'
    })
  })

  // Adicionando projetos de design
  Object.entries(imagensDesign).forEach(([path, module]) => {
    projetosArray.push({
      titulo: 'Projeto de Design',
      descricao: 'Design gráfico e interfaces',
      imagem: module.default,
      categoria: 'design'
    })
  })

  // Adicionando projetos de áudio visual
  Object.entries(imagensAv).forEach(([path, module]) => {
    projetosArray.push({
      titulo: 'Projeto Áudio Visual',
      descricao: 'Produção de conteúdo audiovisual',
      imagem: module.default,
      categoria: 'av',
      isVideo: true
    })
  })

  return projetosArray
})

const projetosFiltrados = computed(() => {
  if (categoriaAtiva.value === 'todos') {
    return projetos.value
  }
  return projetos.value.filter(projeto => projeto.categoria === categoriaAtiva.value)
})

const projetosExibidos = computed(() => {
  return projetosFiltrados.value.slice(0, projetosPorPagina.value)
})

const temMaisProjetos = computed(() => {
  return projetosFiltrados.value.length > projetosPorPagina.value
})

const carregarMais = () => {
  projetosPorPagina.value += 6
}

const abrirModal = (projeto) => {
  projetoSelecionado.value = projeto
  modalAberto.value = true
}

const fecharModal = () => {
  modalAberto.value = false
  projetoSelecionado.value = null
}
</script>

<style scoped>
.projetos-recentes {
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

.projetos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.projeto-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.projeto-card:hover {
  transform: translateY(-5px);
}

.projeto-imagem {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.projeto-info {
  padding: 1.5rem;
  color: white;
}

.elegant-title {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.elegant-btn {
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: none;
  transition: all 0.3s ease;
}

.elegant-btn:hover {
  background: rgba(100, 200, 255, 0.3) !important;
}

.projeto-video {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.modal-card {
  background: rgba(0, 0, 0, 0.95) !important;
}

.modal-content {
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.modal-image {
  max-height: 90vh;
  max-width: 90vw;
  object-fit: contain;
}

.video-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-video {
  max-height: 90vh;
  max-width: 90vw;
}

.projeto-card {
  cursor: pointer;
}

/* Ajuste para o grid de 2 linhas */
.projetos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 960px) {
  .projetos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projetos-grid {
    grid-template-columns: 1fr;
  }
}

.carregar-mais-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

.carregar-mais-btn {
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: none;
  color: white !important;
  border-color: white !important;
  transition: all 0.3s ease;
  padding: 12px 32px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  height: 48px;
}

.carregar-mais-btn:hover {
  color: #00bfff !important;
  border-color: #00bfff !important;
  background: rgba(0, 191, 255, 0.1) !important;
  transform: translateY(-2px);
}

:deep(.v-btn__content) {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

:deep(.v-btn--variant-outlined) {
  border-width: 2px !important;
}

:deep(.v-btn--variant-outlined:hover) {
  border-width: 2px !important;
}
</style> 