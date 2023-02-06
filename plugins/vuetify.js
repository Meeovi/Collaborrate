// plugins/vuetify.js
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa-svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp()

app.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
