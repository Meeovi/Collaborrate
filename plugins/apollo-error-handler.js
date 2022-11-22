export default defineNuxtPlugin(nuxtApp, error, nuxtContext => {
    console.log('Global error handler')
    console.error(error)
  })