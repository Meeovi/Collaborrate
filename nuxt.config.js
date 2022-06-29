

export default {
  target: 'static',
  server: {
    port: 8000
  },
  head: {
    title: 'AlternateCMS',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'},
      {rel: 'stylesheet', href: '/mdb/plugins/css/all.min.css'},
      {rel: 'stylesheet', href: '/mdb/css/mdb.min.css' },
    ],
    script: [
      { src: '/mdb/plugins/js/all.min.js', mode: 'client'},
      { src: '/mdb/js/mdb.min.js', mode: 'client'},
    ]
  },

  css: [
    '~/static/styles/styles.css',
  ],

  script: [
  ],

  plugins: [
    { src: '~/plugins/extensions/postgrest.js', ssr: false },
    { src: '~/plugins/extensions/mdb.client.js', ssr: false },
    { src: '~/plugins/main.js', ssr: false },
    { src: '~/plugins/apollo-error-handler.js', ssr: false },
    { src: '~/plugins/ecommerce/pa-dss.js', ssr: false },
    // { src: '~/plugins/extensions/email.js', ssr: false },
    { src: '~/plugins/upload.js', ssr: false },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/moment',
    'nuxt-webpack-optimisations',
    '@nuxtjs/composition-api/module',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    '@nuxtjs/apollo',
    '@nuxt/http',
    '@nuxtjs/i18n',
    '@nuxt/image',
    // '@nuxtjs/recaptcha',
    '@nuxt/image',
    'nuxt-client-init-module',
    'nuxtjs-darkmode-js-module',
    '@nuxtjs/firebase',
    'nuxt-stripe-module',
    '@nuxtjs/lunr-module',
    'nuxt-highcharts',
    ['nuxt-supabase', { supabaseUrl: 'YOUR_SUPABASE_URL', supabaseKey: 'YOUR_SUPABASE_KEY'}],
  ],

// Modules Options -----------------------------------------------------------------------------------------------

stripe: {
  publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
},

image: {
  provider: 'netlify',
  domains: ['']
},

firebase: {
  config: {
    apiKey: '<apiKey>',
    authDomain: '<authDomain>',
    projectId: '<projectId>',
    storageBucket: '<storageBucket>',
    messagingSenderId: '<messagingSenderId>',
    appId: '<appId>',
    measurementId: '<measurementId>'
  },
  services: {
    auth: true,
    firestore: true,
    functions: true,
    storage: true,
    database: true,
    messaging: true,
    performance: true,
    analytics: true,
    remoteConfig: true
  }
},

highcharts: {
  /* module options */
},

netlify: { 
  headers: {
    '/*': [
      'Access-Control-Allow-Origin: *'
    ],
}
},

  router: {
    middleware: []
  },

  image: {
    // Options
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
    baseURL: '~/',
  },
  
  apollo: {
    clientConfigs: {
      default:{
        httpEndpoint: 'http://localhost:5000/graphiql',
        wsEndpoint: 'ws://localhost:5000/graphiql',
        tokenName: 'apollo-token',
        persisting: false,
        websocketsOnly: false
      },
    },
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    watchLoading: '~/plugins/apollo-watch-loading-handler.js',
    errorHandler: '~/plugins/apollo-error-handler.js',
    authenticationType: 'Bearer', 
    tokenName: 'apollo-token',
    includeNodeModules: true,
    cookieAttributes: {
      expires: 7,
      path: '/',
      domain: 'example.com',
      secure: false,
    },
  },

  sentry: {
    dsn: 'https://b54ea5cfd2cc4c23b49c3d5c6fbbd351@o996770.ingest.sentry.io/6140531',
    config: {
    }
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  content: {},

  /* recaptcha: {
        siteKey: process.env.RECAPTCHA_SITE_KEY,
        version: 3
      }, 

  serverMiddleware: [
    '~/config/postgraphile.config.js'
  ], */
  
  build: {
    extend(config, ctx) {},
  },
}
