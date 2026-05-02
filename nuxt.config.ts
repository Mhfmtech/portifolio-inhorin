// https://nuxt.com/docs/api/configuration/nuxt-config
const GA_MEASUREMENT_ID = 'G-H67GSQC26Z'
const SITE_URL = 'https://www.mauroh.com.br'

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      /** Hotjar Site ID — sobrescreva com NUXT_PUBLIC_HOTJAR_SITE_ID no .env */
      hotjarSiteId: '6427774',
      /** Versão do snippet (hjsv) — NUXT_PUBLIC_HOTJAR_SNIPPET_VERSION */
      hotjarSnippetVersion: '6',
    },
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'pt-BR',
        language: 'pt-BR',
        name: 'Português (Brasil)',
        files: ['pt-BR/general.json', 'pt-BR/cases.json'],
      },
      {
        code: 'en-US',
        language: 'en-US',
        name: 'English (US)',
        files: ['en-US/general.json', 'en-US/cases.json'],
      },
    ],
    defaultLocale: 'pt-BR',
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'pt-BR',
    },
    baseUrl: SITE_URL,
  },
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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Mauro Henrique' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: `${SITE_URL}/og-image.jpg` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: `${SITE_URL}/twitter-image.jpg` }
      ],
      link: [
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
            "url": SITE_URL,
            "image": `${SITE_URL}/mauro.jpg`,
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
