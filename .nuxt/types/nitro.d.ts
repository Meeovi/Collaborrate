// Generated by nitro
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/wishlists': {
      'default': Awaited<ReturnType<typeof import('../../server/api/wishlists').default>>
    }
    '/api/warehouses': {
      'default': Awaited<ReturnType<typeof import('../../server/api/warehouses').default>>
    }
    '/api/vendors': {
      'default': Awaited<ReturnType<typeof import('../../server/api/vendors').default>>
    }
    '/api/users': {
      'default': Awaited<ReturnType<typeof import('../../server/api/users').default>>
    }
    '/api/update': {
      'default': Awaited<ReturnType<typeof import('../../server/api/update').default>>
    }
    '/api/transactions': {
      'default': Awaited<ReturnType<typeof import('../../server/api/transactions').default>>
    }
    '/api/templates': {
      'default': Awaited<ReturnType<typeof import('../../server/api/templates').default>>
    }
    '/api/taxes': {
      'default': Awaited<ReturnType<typeof import('../../server/api/taxes').default>>
    }
    '/api/tags': {
      'default': Awaited<ReturnType<typeof import('../../server/api/tags').default>>
    }
    '/api/states': {
      'default': Awaited<ReturnType<typeof import('../../server/api/states').default>>
    }
    '/api/shipments': {
      'default': Awaited<ReturnType<typeof import('../../server/api/shipments').default>>
    }
    '/api/settings': {
      'default': Awaited<ReturnType<typeof import('../../server/api/settings').default>>
    }
    '/api/serverSessions': {
      'default': Awaited<ReturnType<typeof import('../../server/api/serverSessions').default>>
    }
    '/api/sales': {
      'default': Awaited<ReturnType<typeof import('../../server/api/sales').default>>
    }
    '/api/roles': {
      'default': Awaited<ReturnType<typeof import('../../server/api/roles').default>>
    }
    '/api/reviews': {
      'default': Awaited<ReturnType<typeof import('../../server/api/reviews').default>>
    }
    '/api/read': {
      'default': Awaited<ReturnType<typeof import('../../server/api/read').default>>
    }
    '/api/quotes': {
      'default': Awaited<ReturnType<typeof import('../../server/api/quotes').default>>
    }
    '/api/providers': {
      'default': Awaited<ReturnType<typeof import('../../server/api/providers').default>>
    }
    '/api/productTypes': {
      'default': Awaited<ReturnType<typeof import('../../server/api/productTypes').default>>
    }
    '/api/products': {
      'default': Awaited<ReturnType<typeof import('../../server/api/products').default>>
    }
    '/api/prisma': {
      'default': Awaited<ReturnType<typeof import('../../server/api/prisma').default>>
    }
    '/api/permissions': {
      'default': Awaited<ReturnType<typeof import('../../server/api/permissions').default>>
    }
    '/api/payments': {
      'default': Awaited<ReturnType<typeof import('../../server/api/payments').default>>
    }
    '/api/partners': {
      'default': Awaited<ReturnType<typeof import('../../server/api/partners').default>>
    }
    '/api/pagination': {
      'default': Awaited<ReturnType<typeof import('../../server/api/pagination').default>>
    }
    '/api/pages': {
      'default': Awaited<ReturnType<typeof import('../../server/api/pages').default>>
    }
    '/api/newsletters': {
      'default': Awaited<ReturnType<typeof import('../../server/api/newsletters').default>>
    }
    '/api/middleware': {
      'default': Awaited<ReturnType<typeof import('../../server/api/middleware').default>>
    }
    '/api/metrics': {
      'default': Awaited<ReturnType<typeof import('../../server/api/metrics').default>>
    }
    '/api/manufacturers': {
      'default': Awaited<ReturnType<typeof import('../../server/api/manufacturers').default>>
    }
    '/api/logging': {
      'default': Awaited<ReturnType<typeof import('../../server/api/logging').default>>
    }
    '/api/invoices': {
      'default': Awaited<ReturnType<typeof import('../../server/api/invoices').default>>
    }
    '/api/integrations': {
      'default': Awaited<ReturnType<typeof import('../../server/api/integrations').default>>
    }
    '/api/filterSort': {
      'default': Awaited<ReturnType<typeof import('../../server/api/filterSort').default>>
    }
    '/api/errors': {
      'default': Awaited<ReturnType<typeof import('../../server/api/errors').default>>
    }
    '/api/emails': {
      'default': Awaited<ReturnType<typeof import('../../server/api/emails').default>>
    }
    '/api/discounts': {
      'default': Awaited<ReturnType<typeof import('../../server/api/discounts').default>>
    }
    '/api/delete': {
      'default': Awaited<ReturnType<typeof import('../../server/api/delete').default>>
    }
    '/api/dashboards': {
      'default': Awaited<ReturnType<typeof import('../../server/api/dashboards').default>>
    }
    '/api/customers': {
      'default': Awaited<ReturnType<typeof import('../../server/api/customers').default>>
    }
    '/api/currencies': {
      'default': Awaited<ReturnType<typeof import('../../server/api/currencies').default>>
    }
    '/api/create': {
      'default': Awaited<ReturnType<typeof import('../../server/api/create').default>>
    }
    '/api/countries': {
      'default': Awaited<ReturnType<typeof import('../../server/api/countries').default>>
    }
    '/api/collections': {
      'default': Awaited<ReturnType<typeof import('../../server/api/collections').default>>
    }
    '/api/cities': {
      'default': Awaited<ReturnType<typeof import('../../server/api/cities').default>>
    }
    '/api/channels': {
      'default': Awaited<ReturnType<typeof import('../../server/api/channels').default>>
    }
    '/api/categories': {
      'default': Awaited<ReturnType<typeof import('../../server/api/categories').default>>
    }
    '/api/brands': {
      'default': Awaited<ReturnType<typeof import('../../server/api/brands').default>>
    }
    '/api/blog': {
      'default': Awaited<ReturnType<typeof import('../../server/api/blog').default>>
    }
    '/api/auth/**': {
      'default': Awaited<ReturnType<typeof import('../../server/api/auth/[...]').default>>
    }
    '/api/attributes': {
      'default': Awaited<ReturnType<typeof import('../../server/api/attributes').default>>
    }
    '/api/agreements': {
      'default': Awaited<ReturnType<typeof import('../../server/api/agreements').default>>
    }
    '/sitemap.xml': {
      'default': Awaited<ReturnType<typeof import('../../server/routes/sitemap.xml').default>>
    }
    '/__nuxt_error': {
      'default': Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>
    }
    '/api/_content/query/:qid/**:params': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>
    }
    '/api/_content/query/:qid': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>
    }
    '/api/_content/query': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>
    }
    '/api/_content/cache.json': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/cache').default>>
    }
    '/api/_content/navigation/:qid/**:params': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>
    }
    '/api/_content/navigation/:qid': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>
    }
    '/api/_content/navigation': {
      'get': Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>
    }
  }
}
declare global {
  const __buildAssetsURL: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/dist/core/runtime/nitro/paths')['buildAssetsURL']
  const __publicAssetsURL: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/dist/core/runtime/nitro/paths')['publicAssetsURL']
  const appendHeader: typeof import('h3')['appendHeader']
  const appendHeaders: typeof import('h3')['appendHeaders']
  const appendResponseHeader: typeof import('h3')['appendResponseHeader']
  const appendResponseHeaders: typeof import('h3')['appendResponseHeaders']
  const assertMethod: typeof import('h3')['assertMethod']
  const cachedEventHandler: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/node_modules/nitropack/dist/runtime')['cachedEventHandler']
  const cachedFunction: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/node_modules/nitropack/dist/runtime')['cachedFunction']
  const callNodeListener: typeof import('h3')['callNodeListener']
  const clearSession: typeof import('h3')['clearSession']
  const createApp: typeof import('h3')['createApp']
  const createAppEventHandler: typeof import('h3')['createAppEventHandler']
  const createError: typeof import('h3')['createError']
  const createEvent: typeof import('h3')['createEvent']
  const createRouter: typeof import('h3')['createRouter']
  const defaultContentType: typeof import('h3')['defaultContentType']
  const defineCachedEventHandler: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/node_modules/nitropack/dist/runtime')['defineCachedEventHandler']
  const defineCachedFunction: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/node_modules/nitropack/dist/runtime')['defineCachedFunction']
  const defineEventHandler: typeof import('h3')['defineEventHandler']
  const defineLazyEventHandler: typeof import('h3')['defineLazyEventHandler']
  const defineNitroPlugin: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/node_modules/nitropack/dist/runtime')['defineNitroPlugin']
  const defineNodeListener: typeof import('h3')['defineNodeListener']
  const defineNodeMiddleware: typeof import('h3')['defineNodeMiddleware']
  const defineRenderHandler: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/node_modules/nitropack/dist/runtime')['defineRenderHandler']
  const deleteCookie: typeof import('h3')['deleteCookie']
  const dynamicEventHandler: typeof import('h3')['dynamicEventHandler']
  const eventHandler: typeof import('h3')['eventHandler']
  const fetchWithEvent: typeof import('h3')['fetchWithEvent']
  const fromNodeMiddleware: typeof import('h3')['fromNodeMiddleware']
  const getCookie: typeof import('h3')['getCookie']
  const getHeader: typeof import('h3')['getHeader']
  const getHeaders: typeof import('h3')['getHeaders']
  const getMethod: typeof import('h3')['getMethod']
  const getProxyRequestHeaders: typeof import('h3')['getProxyRequestHeaders']
  const getQuery: typeof import('h3')['getQuery']
  const getRequestHeader: typeof import('h3')['getRequestHeader']
  const getRequestHeaders: typeof import('h3')['getRequestHeaders']
  const getResponseHeader: typeof import('h3')['getResponseHeader']
  const getResponseHeaders: typeof import('h3')['getResponseHeaders']
  const getResponseStatus: typeof import('h3')['getResponseStatus']
  const getResponseStatusText: typeof import('h3')['getResponseStatusText']
  const getRouteRules: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/node_modules/nitropack/dist/runtime')['getRouteRules']
  const getRouterParam: typeof import('h3')['getRouterParam']
  const getRouterParams: typeof import('h3')['getRouterParams']
  const getSession: typeof import('h3')['getSession']
  const handleCacheHeaders: typeof import('h3')['handleCacheHeaders']
  const isError: typeof import('h3')['isError']
  const isEvent: typeof import('h3')['isEvent']
  const isEventHandler: typeof import('h3')['isEventHandler']
  const isMethod: typeof import('h3')['isMethod']
  const isStream: typeof import('h3')['isStream']
  const lazyEventHandler: typeof import('h3')['lazyEventHandler']
  const nitroPlugin: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/node_modules/nitropack/dist/runtime')['nitroPlugin']
  const parseCookies: typeof import('h3')['parseCookies']
  const promisifyNodeListener: typeof import('h3')['promisifyNodeListener']
  const proxyRequest: typeof import('h3')['proxyRequest']
  const readBody: typeof import('h3')['readBody']
  const readMultipartFormData: typeof import('h3')['readMultipartFormData']
  const readRawBody: typeof import('h3')['readRawBody']
  const sealSession: typeof import('h3')['sealSession']
  const send: typeof import('h3')['send']
  const sendError: typeof import('h3')['sendError']
  const sendNoContent: typeof import('h3')['sendNoContent']
  const sendProxy: typeof import('h3')['sendProxy']
  const sendRedirect: typeof import('h3')['sendRedirect']
  const sendStream: typeof import('h3')['sendStream']
  const setCookie: typeof import('h3')['setCookie']
  const setHeader: typeof import('h3')['setHeader']
  const setHeaders: typeof import('h3')['setHeaders']
  const setResponseHeader: typeof import('h3')['setResponseHeader']
  const setResponseHeaders: typeof import('h3')['setResponseHeaders']
  const setResponseStatus: typeof import('h3')['setResponseStatus']
  const toEventHandler: typeof import('h3')['toEventHandler']
  const toNodeListener: typeof import('h3')['toNodeListener']
  const unsealSession: typeof import('h3')['unsealSession']
  const updateSession: typeof import('h3')['updateSession']
  const useBase: typeof import('h3')['useBase']
  const useNitroApp: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/node_modules/nitropack/dist/runtime')['useNitroApp']
  const useRuntimeConfig: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/node_modules/nitropack/dist/runtime')['useRuntimeConfig']
  const useSession: typeof import('h3')['useSession']
  const useStorage: typeof import('C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/node_modules/nitropack/dist/runtime')['useStorage']
  const writeEarlyHints: typeof import('h3')['writeEarlyHints']
}
export {}