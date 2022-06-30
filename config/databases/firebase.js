
export default {
    auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'onAuthStateChangedAction',
          subscribeManually: false
        },
        ssr: false, // default
        emulatorPort: 9099,
        emulatorHost: 'http://localhost',
      },
    
    firestore: {
        memoryOnly: false, // default
        chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
        enablePersistence: true,
        emulatorPort: 8080,
        emulatorHost: 'localhost',
        settings: {
          // Firestore Settings - currently only works in SPA mode
        }
    },

    database: {
        emulatorPort: 9000,
        emulatorHost: 'localhost',
    },

    functions: {
        location: 'us-central1',
        emulatorPort: 12345,
        emulatorHost: 'http://10.10.10.3',
    },

    analytics: {
        collectionEnabled: true // default
    },

    messaging: {
        createServiceWorker: false,
        actions: [
          {
            action: 'randomName',
            url: 'randomUrl'
          }
        ],
        fcmPublicVapidKey: '<publicVapidKey>' // OPTIONAL : Sets vapid key for FCM after initialization
    },

    remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000, // default
          minimumFetchIntervalMillis: 43200000, // default
        },
        defaultConfig: {
          'welcome_message': 'Welcome'
        }
    }
}