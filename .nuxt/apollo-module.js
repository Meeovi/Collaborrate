import Vue from 'vue'
import VueApollo from 'vue-apollo'
import 'cross-fetch/polyfill'
import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client/src'
import Cookie from 'universal-cookie'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use(VueApollo)

export default (ctx, inject) => {
  const providerOptions = { clients: {} }
  const { app, beforeNuxtRender, req } = ctx
  const AUTH_TOKEN_NAME = 'apollo-token'
  const COOKIE_ATTRIBUTES = {"expires":7}
  const AUTH_TYPE = 'Bearer '
  const cookies = new Cookie(req && req.headers.cookie)

  // Config

      const defaultTokenName = ''  || AUTH_TOKEN_NAME

      function defaultGetAuth () {
        const token = cookies.get(defaultTokenName)
        return token && defaultClientConfig.validateToken(token) ? AUTH_TYPE + token : ''
      }

      let defaultClientConfig

        defaultClientConfig = require('~/apollo/clientConfig.js')

        if ('default' in defaultClientConfig) {
          defaultClientConfig = defaultClientConfig.default
        }

        defaultClientConfig = defaultClientConfig(ctx)

      const defaultValidateToken = () => true

      if (!defaultClientConfig.validateToken) {
        defaultClientConfig.validateToken = defaultValidateToken
      }

      const defaultCache = defaultClientConfig.cache
        ? defaultClientConfig.cache
        : new InMemoryCache(defaultClientConfig.inMemoryCacheOptions ? defaultClientConfig.inMemoryCacheOptions: undefined)

      if (!process.server) {
        defaultCache.restore(window.__NUXT__ && window.__NUXT__.apollo ? window.__NUXT__.apollo.defaultClient : null)
      }

      if (!defaultClientConfig.getAuth) {
        defaultClientConfig.getAuth = defaultGetAuth
      }

      if (process.client && defaultClientConfig.browserHttpEndpoint) {
        defaultClientConfig.httpEndpoint = defaultClientConfig.browserHttpEndpoint
      }

      defaultClientConfig.ssr = !!process.server
      defaultClientConfig.cache = defaultCache
      defaultClientConfig.tokenName = defaultTokenName

      // if ssr we'd still like to have our webclient's cookies
      if (process.server && req && req.headers && req.headers.cookie) {
        if (!defaultClientConfig.httpLinkOptions) {
          defaultClientConfig.httpLinkOptions = {}
        }
        if (!defaultClientConfig.httpLinkOptions.headers) {
          defaultClientConfig.httpLinkOptions.headers = {}
        }
        defaultClientConfig.httpLinkOptions.headers.cookie = req.headers.cookie
      }

      // Create apollo client
      let defaultApolloCreation = createApolloClient({
        ...defaultClientConfig
      })
      defaultApolloCreation.apolloClient.wsClient = defaultApolloCreation.wsClient

          providerOptions.defaultClient = defaultApolloCreation.apolloClient

  const vueApolloOptions = Object.assign(providerOptions, {
      errorHandler (error) {
          return require('~/plugins/apollo-error-handler.js').default(error, ctx)
      }
  })

  const apolloProvider = new VueApollo(vueApolloOptions)
  // Allow access to the provider in the context
  app.apolloProvider = apolloProvider

  if (process.server) {
    const ApolloSSR = require('vue-apollo/ssr')
    beforeNuxtRender(({ nuxtState }) => {
      nuxtState.apollo = ApolloSSR.getStates(apolloProvider)
    })
  }

  inject('apolloHelpers', {
    onLogin: async (token, apolloClient = apolloProvider.defaultClient, cookieAttributes = COOKIE_ATTRIBUTES, skipResetStore = false) => {
      // Fallback for tokenExpires param
      if (typeof cookieAttributes === 'number') cookieAttributes = { expires: cookieAttributes }

      if (typeof cookieAttributes.expires === 'number') {
        cookieAttributes.expires = new Date(Date.now()+ 86400*1000*cookieAttributes.expires)
      }

      if (token) {
        cookies.set(AUTH_TOKEN_NAME, token, cookieAttributes)
      } else {
        cookies.remove(AUTH_TOKEN_NAME, cookieAttributes)
      }
      if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
      if (!skipResetStore) {
        try {
          await apolloClient.resetStore()
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('%cError on cache reset (setToken)', 'color: orange;', e.message)
        }
      }
    },
    onLogout: async (apolloClient = apolloProvider.defaultClient, skipResetStore = false) => {
      cookies.remove(AUTH_TOKEN_NAME, COOKIE_ATTRIBUTES)
      if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
      if (!skipResetStore) {
        try {
          await apolloClient.resetStore()
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
        }
      }
    },
    getToken: (tokenName = AUTH_TOKEN_NAME) => {
      return cookies.get(tokenName)
    }
  })
}
