//import { defineNuxtConfig } from 'nuxt'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@sidebase/core'],

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/tether/tether.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'assets/styles/styles.css',
  ],

  scripts: [
    {src: 'https://kit.fontawesome.com/5f36ca3a3b.js', crossorigin: 'anonymous'},
  ],

   modules: [
    //'nuxt-graphql-client',
    '@nuxt/content',
    'nuxt-meilisearch',
    'nuxt-directus',
    '@nuxtjs/apollo',
  ],

  directus: {
    url: process.env.DIRECTUS_URL,
    auth: {
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
      token: process.env.DIRECTUS_TOKEN,
    }
  },

  meilisearch: {
    hostUrl: process.env.HOST_URL,
    searchApiKey: process.env.SEARCH_APIKEY,
    adminApiKey: process.env.ADMIN_APIKEY,
    serverSideUsage: true,
    instantSearch: {
      theme: 'algolia'
    }
  },

  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        tokenName: "apollo-token",
        httpEndpoint: process.env.GQL_HOST,
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': process.env.GQL_HEADERS,
          }
        } /**/
      },
    },
  },


  build: {
    transpile: [
      'vuetify',
      '@apollo/client',
      'ts-invariant/process',
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
