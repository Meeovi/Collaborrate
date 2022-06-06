import VueLib from 'vue'
import merge from 'lodash.mergewith'
import * as Sentry from '@sentry/browser'
import { Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue } from '@sentry/integrations'

export default function (ctx, inject) {
  /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  const config = {
    dsn:"https:\u002F\u002Fb54ea5cfd2cc4c23b49c3d5c6fbbd351@o996770.ingest.sentry.io\u002F6140531",
    environment:"development",
    release:"d8791763fc52654d9b6e541605999b05e758f0d2"
  }

  const runtimeConfigKey = "sentry"
  if (ctx.$config && runtimeConfigKey && ctx.$config[runtimeConfigKey]) {
    merge(config, ctx.$config[runtimeConfigKey].config, ctx.$config[runtimeConfigKey].clientConfig)
  }

  config.integrations = [
    new Dedupe({}),
    new ExtraErrorData({}),
    new ReportingObserver({}),
    new RewriteFrames({}),
    new Vue({ Vue: VueLib, ...{"attachProps":true,"logErrors":true}})
  ]

  /* eslint-enable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  Sentry.init(config)

  inject('sentry', Sentry)
  ctx.$sentry = Sentry
}
