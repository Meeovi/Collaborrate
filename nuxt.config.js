
export default {
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

  css: [
  ],

  plugins: [
    { src: '~/plugins/apollo-error-handler.js', ssr: false },
    { src: '~/plugins/extensions/vuetify.js', ssr: false },
  ],

  components: true,

  buildModules: [
    '@braid/vue-formulate/nuxt',
  ],

  modules: [
    '@nuxtjs/sentry',
    '@nuxtjs/apollo',
    '@nuxtjs/vuetify',
    '@nuxtjs/i18n',
    'nuxt-client-init-module',
    //"@nuxtjs/auth-next",
  ],
  
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
    clientConfigs: {
      default:{
        httpEndpoint: 'http://localhost:4000/graphql',
       // wsEndpoint: WS_ENDPOINT
      }
    },
    watchLoading: '~/plugins/apollo-watch-loading-handler.js',
    errorHandler: '~/plugins/apollo-error-handler.js'
  },

 sentry: {
    dsn: process.env.SENTRY_DSN,
    config: {}
  },

  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },
}
