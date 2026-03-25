// https://nuxt.com/docs/api/configuration/nuxt-config
const GA_MEASUREMENT_ID = 'G-H67GSQC26Z'

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
      title: 'Mauro Henrique - Product Owner (PO) | UX + Front-end',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Product Owner orientado a UX e dados, com background em front-end e estratégia digital. Priorizo backlog, estruturo decisões e entrego impacto mensurável conectando experiência do usuário, negócio e tecnologia.' },
        { name: 'keywords', content: 'product owner, PO, UX, UI, front-end, estratégia digital, discovery, priorização, métricas, produto' },
        { name: 'author', content: 'Mauro Henrique' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Mauro Henrique - Product Owner (PO) | UX + Front-end' },
        { property: 'og:description', content: 'Product Owner orientado a UX e dados, com background em front-end e estratégia digital. Priorizo backlog, estruturo decisões e entrego impacto mensurável.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.mauroh.com.br' },
        { property: 'og:image', content: 'https://www.mauroh.com.br/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mauro Henrique - Product Owner (PO) | UX + Front-end' },
        { name: 'twitter:description', content: 'Product Owner orientado a UX e dados. Priorização, decisões e impacto mensurável.' },
        { name: 'twitter:image', content: 'https://www.mauroh.com.br/twitter-image.jpg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.mauroh.com.br' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
          async: true,
          tagPriority: 'high'
        },
        {
          key: 'ga-gtag-inline',
          innerHTML: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`.trim(),
          tagPriority: 'high'
        },
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
            "jobTitle": "Product Owner (PO) | UX + Front-end",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelancer"
            },
            "description": "Product Owner orientado a UX e dados, com background em front-end e estratégia digital. Priorizo backlog, estruturo decisões e entrego impacto mensurável conectando experiência do usuário, negócio e tecnologia.",
            "knowsAbout": [
              "Product Ownership",
              "UX Design",
              "Prioritization",
              "Experimentation",
              "Metrics",
              "Front-end Development",
              "Strategy"
            ]
          })
        }
      ]
    }
  }
})
