export default defineNuxtPlugin(nuxtApp, isLoading, countModifier, nuxtContext => {
    isLoading += countModifier
    console.log('Global loading', isLoading, countModifier)
})