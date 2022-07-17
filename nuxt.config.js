

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
      {rel: 'stylesheet', href: '/styles/styles.css' },
    ],
    script: [
      { src: '/mdb/plugins/js/all.min.js', mode: 'client'},
      { src: '/mdb/js/mdb.min.js', mode: 'client'},
    ]
  },

  css: [
  ],

  script: [
  ],

  plugins: [
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
      default: '~/apollo/clientConfig.js', // default graphql connection, dont' change

      alternativeClient: { // Hasura Integration, configuration goes here
        httpEndpoint: process.env.HASURA_ENDPOINT,
        browserHttpEndpoint: '/graphql',
        httpLinkOptions: {
          credentials: 'same-origin',
          headers: {
            'x-hasura-admin-secret': process.env.HASURA_SECRET,
            'content-type': 'application/json'
            }
        },

        wsEndpoint: 'ws://localhost:4000',
        tokenName: 'apollo-token',
        persisting: false,
        websocketsOnly: false
      },
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
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'eval-source-map';
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
}
