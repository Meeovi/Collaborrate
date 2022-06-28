import { PluginOrDisabledPlugin } from '@envelop/core'
import { useDepthLimit } from '@envelop/depth-limit'
import { useSentry } from '@envelop/sentry'

const plugins: PluginOrDisabledPlugin = [
  useDepthLimit({
    maxDepth: 10
  }),
  useSentry({
    includeRawResult: false
  })
]

export default plugins