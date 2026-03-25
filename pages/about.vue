<template>
  <div class="about-page">
    <v-container class="py-16">
      <h2 class="text-h3 text-center mb-8">Sobre (na prática)</h2>
      <p class="text-body-1 text-center mb-10 about-subtitle">
        Product Owner orientado a UX e dados, com background em front-end e estratégia digital.
        Transformo necessidades em decisões com causa, reduzo retrabalho e acompanho impacto pós-entrega.
      </p>

      <v-row>
        <v-col v-for="(m, idx) in marcos" :key="idx" cols="12" md="4">
          <v-card class="about-card" variant="outlined">
            <h3 class="about-card-title">{{ m.titulo }}</h3>
            <p class="about-card-text">{{ m.texto }}</p>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-12" justify="center">
        <v-col cols="12" md="8">
          <p class="text-body-1 text-center mb-0 about-callout">
            Meu objetivo é ajudar equipes a construir o que importa: clareza, prioridades negociadas e aprendizagem contínua.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const marcos = [
  { titulo: 'Discovery orientado a evidência', texto: 'Estruturo hipóteses e faço perguntas certas para orientar o que construir.' },
  { titulo: 'Priorização com trade-offs', texto: 'Backlog alinhado a impacto, capacidade e dependências do time.' },
  { titulo: 'Impacto pós-entrega', texto: 'Acompanho resultado e aprendizado para iterar com segurança.' }
]
</script>

<style scoped>
.about-page {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  min-height: 60vh;
}

.about-subtitle {
  color: rgba(255, 255, 255, 0.85);
  max-width: 900px;
  margin: 0 auto;
}

.about-card {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 1.25rem;
  min-height: 160px;
  border-color: rgba(255, 255, 255, 0.12) !important;
}

.about-card-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.05rem;
}

.about-card-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.7;
}

.about-callout {
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.7;
}
</style>