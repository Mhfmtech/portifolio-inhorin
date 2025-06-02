<template>
  <div>
    <Banner id="inicio" />
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
    <ProjetosRecentes />

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
import ProjetosRecentes from '~/components/ProjetosRecentes.vue'

definePageMeta({
  title: 'Início'
})
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style> 