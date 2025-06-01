import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: '#002b55',
            secondary: '#35164c',
            accent: '#012854',
            background: '#000000',
            surface: '#121212',
            error: '#CF6679',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
      },
    },
  })

  app.vueApp.use(vuetify)
}) 