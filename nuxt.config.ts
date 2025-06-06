// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  app: {
    head: {
      title: 'Mauro Henrique - Desenvolvedor Front-end & Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Desenvolvedor Front-end e Designer com experiência em Vue.js, WordPress, Webflow e design de interfaces. Especialista em criar soluções digitais que combinam tecnologia, design e estratégia.' },
        { name: 'keywords', content: 'desenvolvedor front-end, designer, vue.js, wordpress, webflow, ui/ux, marketing digital' },
        { name: 'author', content: 'Mauro Henrique' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Mauro Henrique - Desenvolvedor Front-end & Designer' },
        { property: 'og:description', content: 'Desenvolvedor Front-end e Designer com experiência em Vue.js, WordPress, Webflow e design de interfaces. Especialista em criar soluções digitais que combinam tecnologia, design e estratégia.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.mauroh.com.br' },
        { property: 'og:image', content: 'https://www.mauroh.com.br/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mauro Henrique - Desenvolvedor Front-end & Designer' },
        { name: 'twitter:description', content: 'Desenvolvedor Front-end e Designer com experiência em Vue.js, WordPress, Webflow e design de interfaces.' },
        { name: 'twitter:image', content: 'https://www.mauroh.com.br/twitter-image.jpg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.mauroh.com.br' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mauro Henrique",
            "url": "https://www.mauroh.com.br",
            "image": "https://www.mauroh.com.br/mauro.jpg",
            "sameAs": [
              "https://github.com/Mhfmtech",
              "https://www.linkedin.com/in/mauro-henrique-faria-moreira-7b57bb15a/",
              "https://www.instagram.com/mauro__henrique/"
            ],
            "jobTitle": "Desenvolvedor Front-end & Designer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelancer"
            },
            "description": "Desenvolvedor Front-end e Designer com experiência em Vue.js, WordPress, Webflow e design de interfaces. Especialista em criar soluções digitais que combinam tecnologia, design e estratégia.",
            "knowsAbout": [
              "Vue.js",
              "WordPress",
              "Webflow",
              "UI/UX Design",
              "Marketing Digital",
              "Front-end Development"
            ]
          })
        }
      ]
    }
  }
})
