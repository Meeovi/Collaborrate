
export default defineNuxtConfig({
  target: 'static',
  server: {
    port: 8000
  },
  head: {
    title: 'AlternateCMS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' },
      { rel: 'stylesheet', href: '/mdb/plugins/css/all.min.css' },
      { rel: 'stylesheet', href: '/mdb/css/mdb.min.css' },
      { rel: 'stylesheet', href: '/styles/styles.css' },
      { rel: 'stylesheet', href: '/DataTables/datatables.css' }
    ],
    script: [
      { src: '/mdb/plugins/js/all.min.js', mode: 'client' },
      { src: '/mdb/js/mdb.min.js', mode: 'client' },
      { src: '/DataTables/datatables.js', mode: 'client' },
      { src: '/scripts/main.js', mode: 'client' },
      { src: '/scripts/core/uploads/index.js' },
      { src: '/scripts/media-library.js', mode: 'client' },
    ]
  },

  modules: [
    //'@nuxtjs/sentry',
    '@nuxtjs/apollo',
    //"@nuxtjs/auth-next",
    '@nuxtjs/robots',
    "nuxt-security",
    '@nuxtjs/color-mode',
    'nuxt-meilisearch',
    '@formkit/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  meilisearch: {
    hostUrl:  'http://my-meilisearch-server.domain.com',
    readApiKey: '<your_read_key>',
    writeApiKey: '<your_write_key>',
    instantSearch: true, // default true
    serverSideUsage:  false,// default false
    clientOptions: {
      placeholderSearch: true, // default
      paginationTotalHits: 50, // default
      finitePagination: true, // default
      primaryKey: undefined, // default
      keepZeroFacets: false // default
    }
  },
  
 /* auth: {
    strategies: {
      /* graphql: {
          scheme: '~/schemes/graphqlScheme.js',},
       github: {
        clientId: '79fea712757bda3742da',
        clientSecret: '8234f74e969e5679478f6639fd9247182ac23a2d'
      },
      
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login?logout=true',
      callback: false,
      home: '/',
    },
  }, */

  // Apollo config
  apollo: {
    clients: {
      default:{
        httpEndpoint: 'http://localhost:4000/graphql',
       // wsEndpoint: WS_ENDPOINT
      }
    },
    watchLoading: '~/plugins/apollo-watch-loading-handler.js',
    errorHandler: '~/plugins/apollo-error-handler.js'
  },

 /* sentry: {
    dsn: process.env.SENTRY_DSN,
    config: {
    }
  }, */

  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },
})
