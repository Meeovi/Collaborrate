import createApp from './app.js'

import authService from './service.auth.js'
import databaseService from './service.database.js'
import firestoreService from './service.firestore.js'
import storageService from './service.storage.js'
import functionsService from './service.functions.js'
import messagingService from './service.messaging.js'
import performanceService from './service.performance.js'
import analyticsService from './service.analytics.js'
import remoteConfigService from './service.remoteConfig.js'

const appConfig = {"apiKey":"\u003CapiKey\u003E","authDomain":"\u003CauthDomain\u003E","projectId":"\u003CprojectId\u003E","storageBucket":"\u003CstorageBucket\u003E","messagingSenderId":"\u003CmessagingSenderId\u003E","appId":"\u003CappId\u003E","measurementId":"\u003CmeasurementId\u003E"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    databaseService(session, firebase, ctx, inject),
    firestoreService(session, firebase, ctx, inject),
    storageService(session, firebase, ctx, inject),
    functionsService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      databaseService(session, firebase, ctx, inject),
      firestoreService(session, firebase, ctx, inject),
      storageService(session, firebase, ctx, inject),
      functionsService(session, firebase, ctx, inject),
      messagingService(session, firebase, ctx, inject),
      performanceService(session, firebase, ctx, inject),
      analyticsService(session, firebase, ctx, inject),
      remoteConfigService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    database,
    firestore,
    storage,
    functions,
    messaging,
    performance,
    analytics,
    remoteConfig
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    database: database,
    firestore: firestore,
    storage: storage,
    functions: functions,
    messaging: messaging,
    performance: performance,
    analytics: analytics,
    remoteConfig: remoteConfig
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}