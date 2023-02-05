import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "0-prisma"
declare module "C:/Users/Basti/OneDrive/Documents/My Websites/Handmade Sites/Javascript-Projects/Nuxt-Projects/Applications/AlternateCMS-Framework/AlternateCMS-Nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}