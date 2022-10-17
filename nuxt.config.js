// import webpack from 'webpack'

export default {
  target: 'static',
  server: {
    port: 8000
  },
<<<<<<< HEAD
=======
  env: {
    API_URL: process.env.API_URL || 'http://localhost:8000'
  },
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
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
<<<<<<< HEAD
      { rel: 'stylesheet', href: '/styles/styles.css' },
=======
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
      { rel: 'stylesheet', href: '/DataTables/datatables.css' }
    ],
    script: [
      { src: '/mdb/plugins/js/all.min.js', mode: 'client' },
      { src: '/mdb/js/mdb.min.js', mode: 'client' },
      { src: '/DataTables/datatables.js', mode: 'client' },
      { src: '/scripts/main.js', mode: 'client' },
<<<<<<< HEAD
      { src: '/scripts/upload.js', mode: 'client' },
      { src: '/packages/search/stopwords.js', mode: 'client' },
      { src: '/packages/search/index.js', mode: 'client' },
=======
      { src: '/scripts/core/uploads/index.js' },
      { src: '/scripts/core/authentication/app.js' },
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
      { src: '/scripts/media-library.js', mode: 'client' },
    ]
  },

  css: [
  ],

  plugins: [
    { src: '~/plugins/apollo-error-handler.js', ssr: false },
    { src: '~/plugins/axios.js' },
<<<<<<< HEAD
=======
    { src: '@/plugins/plugin-auth-client', ssr: false },
    { src: '~/plugins/feathers-vuex.js' }
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
  ],

  components: true,

  buildModules: [
    '@nuxtjs/moment',
    '@braid/vue-formulate/nuxt'
  ],

  modules: [
    '@nuxtjs/axios',
<<<<<<< HEAD
=======
    'nuxt-client-init-module',
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
    '@nuxtjs/pwa',
    //'@nuxtjs/proxy',
    '@nuxtjs/sentry',
    // '@nuxtjs/recaptcha',
    'nuxt-stripe-module',
    'nuxt-highcharts',
    '@nuxtjs/apollo',
    '@nuxtjs/dotenv',
    '@nuxtjs/toast',
    "@nuxtjs/axios", 
<<<<<<< HEAD
    // "@nuxtjs/auth-next",
=======
    "@nuxtjs/auth-next",
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
    'nuxt-i18n',
    {
      src: '@nuxtjs/lunr-module',
      options: {
        includeComponent: true,
        globalComponent: false,
        css: true,
        defaultLanguage: 'en',
        languages: false,
        path: 'search-index',
        ref: 'id',
        fields: [
          'title',
          'name',
          'content',
          'description'
        ]
      }
    },
  ],
<<<<<<< HEAD
  /* auth: {
        // Options
        strategies: {
          local: {
            token: {
              property: 'jwt',
            },
            user: {
              property: false,
            },
            endpoints: {
              login: {
                url: 'auth/local',
                method: 'post',
              },
              user: {
                url: 'user/my-account',
                method: 'get',
              },
              logout: false,
            },
          },
        },
      }, */
=======
  
  auth: {
    strategies: {
      /* graphql: {
          scheme: '~/schemes/graphqlScheme.js',}, */
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
  },
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194

  dotenv: {
    path: './' 
  },

  //proxy: ['http://localhost:4000/graphql'],

  // Apollo config
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
      }
    },
    watchLoading: '~/plugins/apollo-watch-loading-handler.js',
    errorHandler: '~/plugins/apollo-error-handler.js'
  },

  toast: {
    position: 'top-right',
    duration: 5000,
    action: {
      text: 'X',
      onClick : (e, toastObject) => {
        toastObject.goAway(0);
      },
      class: 'notification'
    },
    containerClass: 'theme-light',
    className: 'notification'
  },

  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  },

  highcharts: {
    /* module options */
  },

  router: {
<<<<<<< HEAD
    // middleware: ["auth"]
=======
    middleware: [
      'feathers'
    ]
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
  },

  i18n: {
    detectBrowserLanguage: false,
    locales: ['en', 'fr', 'af'],
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    vueI18n: {
      messages: {
        en: {
          'lunr-module': {
            placeholderText: 'search'
          }
        },
        fr: {
          'lunr-module': {
            placeholderText: 'chercher'
          }
        },
        af: {
          'lunr-module': {
            placeholderText: 'zoek'
          }
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

  /* recaptcha: {
          siteKey: process.env.RECAPTCHA_SITE_KEY,
          version: 3
        } 

  serverMiddleware: [
    { path: '/server', handler:'~/server/server' }
  ],*/

  
  build: {
<<<<<<< HEAD
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
=======
    transpile: ['vue-instantsearch', 'instantsearch.js/es', 'feathers-vuex'],
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
  },
}
