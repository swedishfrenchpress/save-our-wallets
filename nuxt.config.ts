// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/fonts.css'],
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap'
        },
        // Simple favicon configuration
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        // Basic SEO
        { name: 'description', content: 'Satoshi Needs You to help Save our Wallets! Demand that congress support the BRCA amendments to the CLARITY Act. Protect your right to transact freely and keep innovation in America.' },
        { name: 'keywords', content: 'blockchain, H.R. 3633, blockchain regulatory certainty act, CLARITY Act, crypto, wallets, regulation, financial freedom, peer-to-peer, innovation, satoshi, uncle sam, dorian, nakamoto, freedom, rights' },

        // Open Graph
        { property: 'og:title', content: 'Save Our Wallets – Protect Your Right to Transact Freely' },
        { property: 'og:description', content: 'Satoshi Needs You to help Save our Wallets! Demand that congress support the BRCA amendments to the CLARITY Act. Protect your right to transact freely and keep innovation in America.' },
        { property: 'og:image', content: 'https://saveourwallets.org/images/new_og_image.jpg' },
        { property: 'og:url', content: 'https://saveourwallets.org/' },
        { property: 'og:type', content: 'website' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Save Our Wallets – Protect Your Right to Transact Freely' },
        { name: 'twitter:description', content: 'Satoshi Needs You to help Save our Wallets! Demand that congress support the BRCA amendments to the CLARITY Act. Protect your right to transact freely and keep innovation in America.' },
        { name: 'twitter:image', content: 'https://saveourwallets.org/images/new_og_image.jpg?v=2' },
        { name: 'twitter:image:alt', content: 'Satoshi Needs You - Save Our Wallets campaign poster' }
      ]
    }
  }
})
