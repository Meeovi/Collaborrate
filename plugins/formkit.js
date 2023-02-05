import '@formkit/themes/genesis'
import '@formkit/pro/genesis'
import { plugin, defaultConfig } from '@formkit/vue'
import { createProPlugin, repeater } from '@formkit/pro'

const pro = createProPlugin('fk-cfad7d53d8', repeater)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component(plugin, defaultConfig({ plugins: [pro] }))
})