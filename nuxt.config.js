

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
        name: 'csrf-token',
        content: '{{csrfToken}}'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'},
      {rel: 'stylesheet', href: '/assets/web/assets/mobirise-icons2/mobirise2.css' },
      {rel: 'stylesheet', href: '/assets/tether/tether.min.css' },
      {rel: 'stylesheet', href: '/assets/dropdown/css/style.css' },
      {rel: 'stylesheet', href: '/assets/socicon/css/styles.css' },
      {rel: 'stylesheet', href: '/assets/theme/css/style.css' },
      // {rel: 'stylesheet', href: '/css/mdb.dark.min.css' },
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.css'},
    ],
    script: [
      { src: 'https://polyfill.io/v3/polyfill.min.js?features=es2015', ssr: false },
      { src: 'https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js', ssr: false },
      { src: 'https://cdn.jsdelivr.net/gh/Rakhmadi/RdataTB@master/dist/index.js', ssr: false },
      { src: '/assets/popper/popper.min.js', ssr: false },
      { src: '/assets/tether/tether.min.js', ssr: false },
      { src: '/assets/smoothscroll/smooth-scroll.js', ssr: false },
      { src: '/assets/dropdown/js/nav-dropdown.js', ssr: false },
      { src: '/assets/dropdown/js/navbar-dropdown.js', ssr: false },
      { src: '/assets/touchswipe/jquery.touch-swipe.min.js', ssr: false },
      { src: '/assets/theme/js/script.js', ssr: false },
      { src: 'https://editor.unlayer.com/embed.js', ssr: false },
    ]
  },

  css: [
    '~/static/css/mdb.min.css',
    '~/static/styles/styles.css',
    'simplemde/dist/simplemde.min.css',
    '~/static/styles/snow.min.css',
  ],

  script: [
    { src: '~/static/js/mdb.min.js', mode: 'client' },
    { src: '~/static/src/mdb/js/mdb.pro.js', ssr: false },
    { src: '~/plugins/extensions/mdb.client.js', ssr: false },
  ],

  plugins: [
    { src: '~/plugins/extensions/simplemde.js', ssr: false },
    { src: '~/plugins/main.js', ssr: false },
    { src: '~/plugins/apollo-error-handler.js', ssr: false },
    { src: '~/plugins/ecommerce/pa-dss.js', ssr: false },
    { src: '~/plugins/client.js', ssr: false },
    { src: '~/plugins/extensions/mdb.client.js', ssr: false },
    { src: '~/plugins/extensions/calendar.js', ssr: false },
    // { src: '~/plugins/extensions/email.js', ssr: false },
    { src: '~/plugins/upload.js', ssr: false },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/moment',
    '@braid/vue-formulate/nuxt',
    'nuxt-webpack-optimisations',
    '@nuxtjs/composition-api/module',
    '@aceforth/nuxt-netlify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    '@nuxtjs/apollo',
    '@nuxt/http',
    '@nuxtjs/i18n',
    'nuxt-socket-io',
    '@nuxtjs/universal-storage',
    // '@nuxtjs/recaptcha',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-helmet',
    '@nuxt/image',
    'nuxt-client-init-module',
    'nuxtjs-darkmode-js-module',
    '@nuxtjs/firebase',
    'nuxt-stripe-module',
    'nuxt-twa',
    '@nuxtjs/lunr-module',
  ],

// Modules Options -----------------------------------------------------------------------------------------------

stripe: {
  publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
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

netlify: { 
  headers: {
    '/*': [
      'Access-Control-Allow-Origin: *'
    ],
}
},

twa: {
  host: '/'
},

  router: {
    middleware: []
  },

  image: {
    // Options
  },

  helmet: {},

  sitemap: {
    hostname: 'http://localhost'
  },

  storage: {
      vuex: {
        namespace: 'storage'
      },
      cookie: {
        prefix: '',
        options: {
          path: '/'
        }
      },
      localStorage: {
        prefix: ''
      },
      ignoreExceptions: false,
  },

  io: {
    sockets: [
      {
        name: 'home',
        url: 'http://localhost:8000',
        default: true,
      },
    ]
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
    cookieAttributes: {
      expires: 7, 
    },
    includeNodeModules: true, 
    browserHttpEndpoint: '/graphql',
    httpLinkOptions: {
      credentials: 'same-origin'
    },
    authenticationType: 'Bearer', 
    errorHandler: '~/plugins/apollo-error-handler.js',
    clientConfigs: {
      default: '~/apollo/clientConfig.js'
    }
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

  formulate: {
    configPath: '~/formulate.config.js'
  },

  /* recaptcha: {
        siteKey: process.env.RECAPTCHA_SITE_KEY,
        version: 3
      }, */

  publicRuntimeConfig: {
    
  },
  
  build: {
    extend(config, ctx) {},
    transpile: [/echarts/, /zrender/]
  },
}
