import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_27268780 from 'nuxt_plugin_plugin_27268780' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_sentryserver_dc32af32 from 'nuxt_plugin_sentryserver_dc32af32' // Source: .\\sentry.server.js (mode: 'server')
import nuxt_plugin_sentryclient_2c2d36df from 'nuxt_plugin_sentryclient_2c2d36df' // Source: .\\sentry.client.js (mode: 'client')
import nuxt_plugin_plugin_bbaa3430 from 'nuxt_plugin_plugin_bbaa3430' // Source: .\\composition-api\\plugin.mjs (mode: 'all')
import nuxt_plugin_supabase_377e63de from 'nuxt_plugin_supabase_377e63de' // Source: .\\supabase.js (mode: 'all')
import nuxt_plugin_supabasecookie_33147bbf from 'nuxt_plugin_supabasecookie_33147bbf' // Source: .\\supabase-cookie.js (mode: 'all')
import nuxt_plugin_plugin_6713dfa7 from 'nuxt_plugin_plugin_6713dfa7' // Source: .\\nuxt-highcharts\\plugin.js (mode: 'all')
import nuxt_plugin_templatesplugin723c220b_2cc9c6b6 from 'nuxt_plugin_templatesplugin723c220b_2cc9c6b6' // Source: .\\templates.plugin.723c220b.js (mode: 'client')
import nuxt_plugin_nuxtjsdarkmodejsmodule_8f7365c8 from 'nuxt_plugin_nuxtjsdarkmodejsmodule_8f7365c8' // Source: .\\nuxtjs-darkmode-js-module.js (mode: 'all')
import nuxt_plugin_image_0b578ec4 from 'nuxt_plugin_image_0b578ec4' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_pluginutils_76bd8d2b from 'nuxt_plugin_pluginutils_76bd8d2b' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_738f7bb6 from 'nuxt_plugin_pluginrouting_738f7bb6' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_1c38090e from 'nuxt_plugin_pluginmain_1c38090e' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_httpserver_6dd1ea50 from 'nuxt_plugin_httpserver_6dd1ea50' // Source: .\\http.server.js (mode: 'server')
import nuxt_plugin_http_e4cd5366 from 'nuxt_plugin_http_e4cd5366' // Source: .\\http.js (mode: 'all')
import nuxt_plugin_apollomodule_88909722 from 'nuxt_plugin_apollomodule_88909722' // Source: .\\apollo-module.js (mode: 'all')
import nuxt_plugin_workbox_1a855802 from 'nuxt_plugin_workbox_1a855802' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_52cfd97f from 'nuxt_plugin_metaplugin_52cfd97f' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_57777ef3 from 'nuxt_plugin_iconplugin_57777ef3' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_0f4d3ba3 from 'nuxt_plugin_axios_0f4d3ba3' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_moment_2df46b56 from 'nuxt_plugin_moment_2df46b56' // Source: .\\moment.js (mode: 'all')
import nuxt_plugin_mdbclient_45fda484 from 'nuxt_plugin_mdbclient_45fda484' // Source: ..\\plugins\\extensions\\mdb.client.js (mode: 'client')
import nuxt_plugin_main_1856e168 from 'nuxt_plugin_main_1856e168' // Source: ..\\plugins\\main.js (mode: 'client')
import nuxt_plugin_apolloerrorhandler_4a9e745a from 'nuxt_plugin_apolloerrorhandler_4a9e745a' // Source: ..\\plugins\\apollo-error-handler.js (mode: 'client')
import nuxt_plugin_padss_01fba8ca from 'nuxt_plugin_padss_01fba8ca' // Source: ..\\plugins\\ecommerce\\pa-dss.js (mode: 'client')
import nuxt_plugin_upload_8ca86cc0 from 'nuxt_plugin_upload_8ca86cc0' // Source: ..\\plugins\\upload.js (mode: 'client')
import nuxt_plugin_libnuxtclientinitpluginclient392569cc_36206968 from 'nuxt_plugin_libnuxtclientinitpluginclient392569cc_36206968' // Source: .\\lib.nuxt-client-init.plugin.client.392569cc.js (mode: 'client')
import nuxt_plugin_meta_cc39ca0c from 'nuxt_plugin_meta_cc39ca0c' // Source: .\\composition-api\\meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"AlternateCMS","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F5.15.1\u002Fcss\u002Fall.min.css"},{"rel":"stylesheet","href":"\u002Fmdb\u002Fplugins\u002Fcss\u002Fall.min.css"},{"rel":"stylesheet","href":"\u002Fmdb\u002Fcss\u002Fmdb.min.css"},{"rel":"stylesheet","href":"\u002Fstyles\u002Fstyles.css"}],"script":[{"src":"\u002Fmdb\u002Fplugins\u002Fjs\u002Fall.min.js","mode":"client"},{"src":"\u002Fmdb\u002Fjs\u002Fmdb.min.js","mode":"client"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_27268780 === 'function') {
    await nuxt_plugin_plugin_27268780(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_sentryserver_dc32af32 === 'function') {
    await nuxt_plugin_sentryserver_dc32af32(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_sentryclient_2c2d36df === 'function') {
    await nuxt_plugin_sentryclient_2c2d36df(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_bbaa3430 === 'function') {
    await nuxt_plugin_plugin_bbaa3430(app.context, inject)
  }

  if (typeof nuxt_plugin_supabase_377e63de === 'function') {
    await nuxt_plugin_supabase_377e63de(app.context, inject)
  }

  if (typeof nuxt_plugin_supabasecookie_33147bbf === 'function') {
    await nuxt_plugin_supabasecookie_33147bbf(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_6713dfa7 === 'function') {
    await nuxt_plugin_plugin_6713dfa7(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_templatesplugin723c220b_2cc9c6b6 === 'function') {
    await nuxt_plugin_templatesplugin723c220b_2cc9c6b6(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtjsdarkmodejsmodule_8f7365c8 === 'function') {
    await nuxt_plugin_nuxtjsdarkmodejsmodule_8f7365c8(app.context, inject)
  }

  if (typeof nuxt_plugin_image_0b578ec4 === 'function') {
    await nuxt_plugin_image_0b578ec4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_76bd8d2b === 'function') {
    await nuxt_plugin_pluginutils_76bd8d2b(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_738f7bb6 === 'function') {
    await nuxt_plugin_pluginrouting_738f7bb6(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_1c38090e === 'function') {
    await nuxt_plugin_pluginmain_1c38090e(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_httpserver_6dd1ea50 === 'function') {
    await nuxt_plugin_httpserver_6dd1ea50(app.context, inject)
  }

  if (typeof nuxt_plugin_http_e4cd5366 === 'function') {
    await nuxt_plugin_http_e4cd5366(app.context, inject)
  }

  if (typeof nuxt_plugin_apollomodule_88909722 === 'function') {
    await nuxt_plugin_apollomodule_88909722(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_1a855802 === 'function') {
    await nuxt_plugin_workbox_1a855802(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_52cfd97f === 'function') {
    await nuxt_plugin_metaplugin_52cfd97f(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_57777ef3 === 'function') {
    await nuxt_plugin_iconplugin_57777ef3(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_0f4d3ba3 === 'function') {
    await nuxt_plugin_axios_0f4d3ba3(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_2df46b56 === 'function') {
    await nuxt_plugin_moment_2df46b56(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_mdbclient_45fda484 === 'function') {
    await nuxt_plugin_mdbclient_45fda484(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_main_1856e168 === 'function') {
    await nuxt_plugin_main_1856e168(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_apolloerrorhandler_4a9e745a === 'function') {
    await nuxt_plugin_apolloerrorhandler_4a9e745a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_padss_01fba8ca === 'function') {
    await nuxt_plugin_padss_01fba8ca(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_upload_8ca86cc0 === 'function') {
    await nuxt_plugin_upload_8ca86cc0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_libnuxtclientinitpluginclient392569cc_36206968 === 'function') {
    await nuxt_plugin_libnuxtclientinitpluginclient392569cc_36206968(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_cc39ca0c === 'function') {
    await nuxt_plugin_meta_cc39ca0c(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
