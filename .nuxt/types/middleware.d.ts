import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "0-prisma"
declare module "C:/Users/sehilton/Documents/github/alternatecms/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}