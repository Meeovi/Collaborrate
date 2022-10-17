export default {
        modules: [
          'nuxt-stripe-module',
        ],
        publicRuntimeConfig: {
          stripe: {
            publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
          }
        }
}