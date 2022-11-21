const MAIN_ENDPOINT = 'http://localhost:4000/graphql'
const WS_ENDPOINT = 'ws://localhost:4000/graphql'

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
    { src: '~/plugins/axios.js' },
    //{ src: '~/plugins/extensions/pinia.js' },
  ],

  components: true,

  buildModules: [
    '@braid/vue-formulate/nuxt',
  ],

  modules: [
    'nuxt-client-init-module',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    'nuxt-highcharts',
    '@nuxtjs/apollo',
    '@nuxtjs/dotenv',
    "@nuxtjs/axios", 
    //"@nuxtjs/auth-next",
    '@nuxtjs/i18n',
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

  dotenv: {
    path: './' 
  },

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

  highcharts: {
    /* module options */
  },

  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },

  axios: {
    baseURL: '/'
  },

  sentry: {
    dsn: process.env.SENTRY_DSN,
    config: {
    }
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },
}
