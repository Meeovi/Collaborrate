import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/Basti/OneDrive/Documents/My Websites/Handmade Sites/Javascript-Projects/Nuxt-Projects/Applications/AlternateCMS-Framework/AlternateCMS-Nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}