// import webpack from 'webpack'

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
      { rel: 'stylesheet', href: '/styles/styles.css' },
      { rel: 'stylesheet', href: '/DataTables/datatables.css' }
    ],
    script: [
      { src: '/mdb/plugins/js/all.min.js', mode: 'client' },
      { src: '/mdb/js/mdb.min.js', mode: 'client' },
      { src: '/DataTables/datatables.js', mode: 'client' },
      { src: '/scripts/main.js', mode: 'client' },
      { src: '/scripts/upload.js', mode: 'client' },
      { src: '/packages/search/stopwords.js', mode: 'client' },
      { src: '/packages/search/index.js', mode: 'client' },
      { src: '/scripts/media-library.js', mode: 'client' },
    ]
  },

  css: [
  ],

  plugins: [
    { src: '~/plugins/apollo-error-handler.js', ssr: false },
    { src: '~/plugins/axios.js' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/moment',
    '@braid/vue-formulate/nuxt'
  ],

  modules: [
    '@nuxtjs/axios',
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
    // "@nuxtjs/auth-next",
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
    // middleware: ["auth"]
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
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },
}
