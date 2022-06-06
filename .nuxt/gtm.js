// This is a mock version because gtm module is disabled
// You can explicitly enable module using `gtm.enabled: true` in nuxt.config
import { log } from './gtm.utils'

const _layer = 'dataLayer'
const _id = 'GTM-XXXXXXX'

function startPageTracking (ctx) {
  ctx.app.router.afterEach((to) => {
    setTimeout(() => {
      ctx.$gtm.push(to.gtm || {
        routeName: to.name,
        pageType: 'PageView',
        pageUrl: '' + to.fullPath,
        pageTitle: (typeof document !== 'undefined' && document.title) || '',
        event: 'nuxtRoute'
      })
    }, 250)
  })
}

export default function (ctx, inject) {
  log('Using mocked API. Real GTM events will not be reported.')
  const gtm = {
    init: (id) => {
      log('init', id)
    },
    push: (event) => {
      log('push', process.client ? event : JSON.stringify(event))
      if (typeof event.eventCallback === 'function') {
        event.eventCallback()
      }
    }
  }

  ctx.$gtm = gtm
  inject('gtm', gtm)
}
