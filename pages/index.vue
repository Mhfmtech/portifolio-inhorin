<template>
  <div>
    <Banner />
    <!-- About Section -->
    <v-container id="sobre" class="py-16">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h2 class="text-h3 text-center mb-8">Sobre Mim</h2>
          <p class="text-body-1 text-center">
            Sou um desenvolvedor apaixonado por criar experiências digitais únicas e funcionais. 
            Com expertise em desenvolvimento web e design de interfaces, busco sempre entregar 
            soluções que combinam estética e usabilidade.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Projects Section -->
    <v-container id="projetos" class="py-16 bg-grey-lighten-4">
      <h2 class="text-h3 text-center mb-12">Projetos Recentes</h2>
      <v-row>
        <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          md="4"
        >
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200"
              cover
            ></v-img>
            <v-card-title>Projeto {{ n }}</v-card-title>
            <v-card-text>
              Descrição do projeto e tecnologias utilizadas.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" variant="text">
                Ver mais
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Section -->
    <v-container id="contato" class="py-16">
      <h2 class="text-h3 text-center mb-12">Entre em Contato</h2>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card class="pa-6">
            <v-form @submit.prevent>
              <v-text-field
                label="Nome"
                variant="outlined"
                class="mb-4"
              ></v-text-field>
              <v-text-field
                label="Email"
                variant="outlined"
                class="mb-4"
              ></v-text-field>
              <v-textarea
                label="Mensagem"
                variant="outlined"
                class="mb-4"
              ></v-textarea>
              <v-btn
                color="primary"
                size="large"
                block
                type="submit"
              >
                Enviar Mensagem
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import Banner from '~/components/Banner.vue'

definePageMeta({
  title: 'Início'
})
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style> 