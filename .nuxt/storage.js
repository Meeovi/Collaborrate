import { Storage } from '~storage'

export default function nuxtUniversalStorage(ctx, inject) {
  let options = {
  "vuex": {
    "namespace": "storage"
  },
  "cookie": {
    "prefix": "",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": ""
  },
  "ignoreExceptions": false
}
  const cookie = {"prefix":"","options":{"path":"\u002F"}}

  options = {
    ...options,
    cookie
  }

  // Create new instance of Storage class
  const storage = new Storage(ctx, options)

  // Inject into context as $storage
  ctx.$storage = storage
  inject('storage', storage)
}
