import InstantSearch from 'vue-instantsearch/vue3/es';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('ais-instant-search', InstantSearch)
})