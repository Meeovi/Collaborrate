//import { defineNuxtConfig } from 'nuxt'
import { setAbsoluteSqliteDatabaseUrlForPrisma } from '@sidebase/nuxt-prisma'

setAbsoluteSqliteDatabaseUrlForPrisma()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    extends: ['@sidebase/core', '@sidebase/nuxt-prisma'],

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
      'assets/styles/main.css'
    ],

    modules: [
      '@nuxtjs/apollo',
      //'@sidebase/nuxt-auth',
      '@nuxt/content',
      '@nuxtjs/i18n',
      "nuxt-security",
      'nuxt-meilisearch',
      'nuxt-directus'
  ],

/*
  auth: {
    // The module is enabled. Change this to disable the module
    isEnabled: false,
    // The origin is set to the development origin. Change this when deploying to production
    origin: 'http://localhost:3000',
    // The base path to the authentication endpoints. Change this if you want to add your auth-endpoints at a non-default location
    basePath: '/api/auth',
    // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
    enableSessionRefreshPeriodically: true,
    // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
    enableSessionRefreshOnWindowFocus: true,
    // Whether to add a global authentication middleware that will protect all pages without exclusion
    enableGlobalAppMiddleware: false
  }, 
  */

  directus: {
    url: process.env.DIRECTUS_URL,
    auth: {
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
      token: process.env.DIRECTUS_TOKEN,
    }
  },

  meilisearch: {
    hostUrl:  process.env.HOSTURL,
    searchApiKey: process.env.SEARCH_APIKEY,
    adminApiKey: process.env.ADMIN_APIKEY,
    serverSideUsage: true,
    instantSearch: {
      theme: 'algolia'
    }
 },

    i18n: {
      strategy: 'no_prefix',
      en: { pathMatch: ['not-found-my-post'] },
      fr: { pathMatch: ['not-found-mon-article'] },
      locales: [
        {
          code: 'en',
          name: 'English'
        },
        {
          code: 'es',
          name: 'Español'
        },
        {
          code: 'fr',
          name: 'Français'
        }
      ],
      skipSettingLocaleOnNavigate: true,
      detectBrowserLanguage: {
        useCookie: true,
        cookieCrossOrigin: true
      }
    },

    apollo: {
      clients: {
        default: {
          httpEndpoint: 'http://localhost:4000/graphql',
          wsEndpoint: "ws://localhost:4000/graphql"
        }
      },
    },

    build: {
      transpile: [
        'vuetify',
        "@fortawesome/vue-fontawesome",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
      ],
    },

    nitro: {
      prerender: {
        routes: ['/sitemap.xml']
      },
      preset: 'service-worker'
    },

    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
  })