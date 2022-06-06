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

import nuxt_plugin_plugin_6befc4d1 from 'nuxt_plugin_plugin_6befc4d1' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_plugin_1c3590c3 from 'nuxt_plugin_plugin_1c3590c3' // Source: .\\vuetify\\plugin.js (mode: 'all')
import nuxt_plugin_sentryserver_b9859390 from 'nuxt_plugin_sentryserver_b9859390' // Source: .\\sentry.server.js (mode: 'server')
import nuxt_plugin_sentryclient_3d83c4b0 from 'nuxt_plugin_sentryclient_3d83c4b0' // Source: .\\sentry.client.js (mode: 'client')
import nuxt_plugin_nuxtjsdarkmodejsmodule_5c29a96d from 'nuxt_plugin_nuxtjsdarkmodejsmodule_5c29a96d' // Source: .\\nuxtjs-darkmode-js-module.js (mode: 'all')
import nuxt_plugin_image_759a276f from 'nuxt_plugin_image_759a276f' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_adsbygoogle_dfc92b2c from 'nuxt_plugin_adsbygoogle_dfc92b2c' // Source: .\\adsbygoogle.js (mode: 'all')
import nuxt_plugin_googleanalytics_20f4dd32 from 'nuxt_plugin_googleanalytics_20f4dd32' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_storage_00ed198f from 'nuxt_plugin_storage_00ed198f' // Source: .\\storage.js (mode: 'all')
import nuxt_plugin_nuxtsocketio_48353f6e from 'nuxt_plugin_nuxtsocketio_48353f6e' // Source: .\\nuxt-socket-io.js (mode: 'all')
import nuxt_plugin_gtm_8af8036c from 'nuxt_plugin_gtm_8af8036c' // Source: .\\gtm.js (mode: 'all')
import nuxt_plugin_pluginutils_696afa7a from 'nuxt_plugin_pluginutils_696afa7a' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_7096d145 from 'nuxt_plugin_pluginrouting_7096d145' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_0a3c284a from 'nuxt_plugin_pluginmain_0a3c284a' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtleaflet_1a037bd1 from 'nuxt_plugin_nuxtleaflet_1a037bd1' // Source: .\\nuxt-leaflet.js (mode: 'client')
import nuxt_plugin_apollomodule_65e37b80 from 'nuxt_plugin_apollomodule_65e37b80' // Source: .\\apollo-module.js (mode: 'all')
import nuxt_plugin_workbox_977a5ae0 from 'nuxt_plugin_workbox_977a5ae0' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_68ba3710 from 'nuxt_plugin_metaplugin_68ba3710' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_6d61dc84 from 'nuxt_plugin_iconplugin_6d61dc84' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_ead9ab18 from 'nuxt_plugin_axios_ead9ab18' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_nuxtplugin1ea8e8dd_e37afa94 from 'nuxt_plugin_nuxtplugin1ea8e8dd_e37afa94' // Source: .\\nuxt.plugin.1ea8e8dd.js (mode: 'all')
import nuxt_plugin_moment_530494b8 from 'nuxt_plugin_moment_530494b8' // Source: .\\moment.js (mode: 'all')
import nuxt_plugin_simplemde_cd1bd0c0 from 'nuxt_plugin_simplemde_cd1bd0c0' // Source: ..\\plugins\\extensions\\simplemde.js (mode: 'client')
import nuxt_plugin_main_1856e168 from 'nuxt_plugin_main_1856e168' // Source: ..\\plugins\\main.js (mode: 'client')
import nuxt_plugin_apolloerrorhandler_4a9e745a from 'nuxt_plugin_apolloerrorhandler_4a9e745a' // Source: ..\\plugins\\apollo-error-handler.js (mode: 'client')
import nuxt_plugin_paypal_6c62dc42 from 'nuxt_plugin_paypal_6c62dc42' // Source: ..\\plugins\\ecommerce\\paypal.js (mode: 'client')
import nuxt_plugin_padss_01fba8ca from 'nuxt_plugin_padss_01fba8ca' // Source: ..\\plugins\\ecommerce\\pa-dss.js (mode: 'client')
import nuxt_plugin_client_035ad0d4 from 'nuxt_plugin_client_035ad0d4' // Source: ..\\plugins\\client.js (mode: 'client')
import nuxt_plugin_datatables_2bede87a from 'nuxt_plugin_datatables_2bede87a' // Source: ..\\plugins\\extensions\\datatables.js (mode: 'client')
import nuxt_plugin_axios_3566aa80 from 'nuxt_plugin_axios_3566aa80' // Source: ..\\plugins\\axios (mode: 'all')
import nuxt_plugin_upload_8ca86cc0 from 'nuxt_plugin_upload_8ca86cc0' // Source: ..\\plugins\\upload.js (mode: 'client')
import nuxt_plugin_charts_8918b486 from 'nuxt_plugin_charts_8918b486' // Source: ..\\plugins\\extensions\\charts.js (mode: 'client')
import nuxt_plugin_libnuxtclientinitpluginclient931b7b2a_01299480 from 'nuxt_plugin_libnuxtclientinitpluginclient931b7b2a_01299480' // Source: .\\lib.nuxt-client-init.plugin.client.931b7b2a.js (mode: 'client')

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
    head: {"title":"AlternateCMS","meta":[{"name":"robots","content":"noindex,noarchive,nofollow"},{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"csrf-token","content":"{{csrfToken}}"},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F5.15.1\u002Fcss\u002Fall.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:300,400,500,700&display=swap"},{"rel":"stylesheet","href":"\u002Fassets\u002Fweb\u002Fassets\u002Fmobirise-icons2\u002Fmobirise2.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Ftether\u002Ftether.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fdropdown\u002Fcss\u002Fstyle.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fsocicon\u002Fcss\u002Fstyles.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Ftheme\u002Fcss\u002Fstyle.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fmobirise\u002Fcss\u002Fmbr-additional.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fmdb-ui-kit\u002F3.10.0\u002Fmdb.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"script":[{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fchart.js","ssr":false},{"src":"https:\u002F\u002Fpolyfill.io\u002Fv3\u002Fpolyfill.min.js?features=es2015","ssr":false},{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fjquery\u002Fdist\u002Fjquery.min.js","ssr":false},{"src":"\u002Fassets\u002Fpopper\u002Fpopper.min.js","ssr":false},{"src":"\u002Fassets\u002Ftether\u002Ftether.min.js","ssr":false},{"src":"\u002Fassets\u002Fsmoothscroll\u002Fsmooth-scroll.js","ssr":false},{"src":"\u002Fassets\u002Fdropdown\u002Fjs\u002Fnav-dropdown.js","ssr":false},{"src":"\u002Fassets\u002Fdropdown\u002Fjs\u002Fnavbar-dropdown.js","ssr":false},{"src":"\u002Fassets\u002Ftouchswipe\u002Fjquery.touch-swipe.min.js","ssr":false},{"src":"\u002Fassets\u002Ftheme\u002Fjs\u002Fscript.js","ssr":false},{"src":"https:\u002F\u002Feditor.unlayer.com\u002Fembed.js","ssr":false},{"hid":"adsbygoogle-script","defer":true,"crossorigin":"anonymous","src":"\u002F\u002Fpagead2.googlesyndication.com\u002Fpagead\u002Fjs\u002Fadsbygoogle.js?client=ca-google"},{"hid":"adsbygoogle","innerHTML":"if (!window.__abg_called){ (window.adsbygoogle = window.adsbygoogle || []); adsbygoogle.pauseAdRequests=0;\n          adsbygoogle.push({\n      google_ad_client: \"ca-google\",\n      overlays: {bottom: false},\n      \n    }); window.__abg_called = true;}"}],"style":[],"__dangerouslyDisableSanitizersByTagID":{"adsbygoogle":["innerHTML"]}},

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

  if (typeof nuxt_plugin_plugin_6befc4d1 === 'function') {
    await nuxt_plugin_plugin_6befc4d1(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_1c3590c3 === 'function') {
    await nuxt_plugin_plugin_1c3590c3(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_sentryserver_b9859390 === 'function') {
    await nuxt_plugin_sentryserver_b9859390(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_sentryclient_3d83c4b0 === 'function') {
    await nuxt_plugin_sentryclient_3d83c4b0(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtjsdarkmodejsmodule_5c29a96d === 'function') {
    await nuxt_plugin_nuxtjsdarkmodejsmodule_5c29a96d(app.context, inject)
  }

  if (typeof nuxt_plugin_image_759a276f === 'function') {
    await nuxt_plugin_image_759a276f(app.context, inject)
  }

  if (typeof nuxt_plugin_adsbygoogle_dfc92b2c === 'function') {
    await nuxt_plugin_adsbygoogle_dfc92b2c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_20f4dd32 === 'function') {
    await nuxt_plugin_googleanalytics_20f4dd32(app.context, inject)
  }

  if (typeof nuxt_plugin_storage_00ed198f === 'function') {
    await nuxt_plugin_storage_00ed198f(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtsocketio_48353f6e === 'function') {
    await nuxt_plugin_nuxtsocketio_48353f6e(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_8af8036c === 'function') {
    await nuxt_plugin_gtm_8af8036c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_696afa7a === 'function') {
    await nuxt_plugin_pluginutils_696afa7a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_7096d145 === 'function') {
    await nuxt_plugin_pluginrouting_7096d145(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_0a3c284a === 'function') {
    await nuxt_plugin_pluginmain_0a3c284a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nuxtleaflet_1a037bd1 === 'function') {
    await nuxt_plugin_nuxtleaflet_1a037bd1(app.context, inject)
  }

  if (typeof nuxt_plugin_apollomodule_65e37b80 === 'function') {
    await nuxt_plugin_apollomodule_65e37b80(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_977a5ae0 === 'function') {
    await nuxt_plugin_workbox_977a5ae0(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_68ba3710 === 'function') {
    await nuxt_plugin_metaplugin_68ba3710(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_6d61dc84 === 'function') {
    await nuxt_plugin_iconplugin_6d61dc84(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_ead9ab18 === 'function') {
    await nuxt_plugin_axios_ead9ab18(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin1ea8e8dd_e37afa94 === 'function') {
    await nuxt_plugin_nuxtplugin1ea8e8dd_e37afa94(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_530494b8 === 'function') {
    await nuxt_plugin_moment_530494b8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_simplemde_cd1bd0c0 === 'function') {
    await nuxt_plugin_simplemde_cd1bd0c0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_main_1856e168 === 'function') {
    await nuxt_plugin_main_1856e168(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_apolloerrorhandler_4a9e745a === 'function') {
    await nuxt_plugin_apolloerrorhandler_4a9e745a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_paypal_6c62dc42 === 'function') {
    await nuxt_plugin_paypal_6c62dc42(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_padss_01fba8ca === 'function') {
    await nuxt_plugin_padss_01fba8ca(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_client_035ad0d4 === 'function') {
    await nuxt_plugin_client_035ad0d4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_datatables_2bede87a === 'function') {
    await nuxt_plugin_datatables_2bede87a(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_3566aa80 === 'function') {
    await nuxt_plugin_axios_3566aa80(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_upload_8ca86cc0 === 'function') {
    await nuxt_plugin_upload_8ca86cc0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_charts_8918b486 === 'function') {
    await nuxt_plugin_charts_8918b486(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_libnuxtclientinitpluginclient931b7b2a_01299480 === 'function') {
    await nuxt_plugin_libnuxtclientinitpluginclient931b7b2a_01299480(app.context, inject)
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
