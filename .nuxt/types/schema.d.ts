import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["meilisearch"]?: typeof import("nuxt-meilisearch").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["directus"]?: typeof import("nuxt-directus").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["apollo"]?: typeof import("@nuxtjs/apollo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-config-schema"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/content", NuxtConfig["content"]] | ["nuxt-meilisearch", NuxtConfig["meilisearch"]] | ["nuxt-directus", NuxtConfig["directus"]] | ["@nuxtjs/apollo", NuxtConfig["apollo"]] | ["nuxt-config-schema", NuxtConfig["nuxt-config-schema"]] | ["@nuxt/telemetry", NuxtConfig["telemetry"]])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<string>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: boolean,

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<any>,
      },

      documentDriven: boolean,

      experimental: {
         clientDB: boolean,

         stripQueryParameters: boolean,
      },
   },

   serverMeilisearchClient: {
      hostUrl: string,

      searchApiKey: string,

      adminApiKey: string,

      serverSideUsage: boolean,

      instantSearch: {
         theme: string,
      },

      clientOptions: {
         placeholderSearch: boolean,

         paginationTotalHits: number,

         finitePagination: boolean,

         primaryKey: any,

         keepZeroFacets: boolean,
      },
   },
  }
  interface PublicRuntimeConfig {
   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         clientDB: boolean,
      },

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<any>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: boolean,

      wsUrl: string,

      documentDriven: boolean,

      host: string,

      trailingSlash: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },

   meilisearchClient: {
      hostUrl: string,

      searchApiKey: string,

      serverSideUsage: boolean,

      instantSearch: {
         theme: string,
      },

      clientOptions: {
         placeholderSearch: boolean,

         paginationTotalHits: number,

         finitePagination: boolean,

         primaryKey: any,

         keepZeroFacets: boolean,
      },
   },

   directus: {
      url: string,

      autoFetch: boolean,

      autoRefresh: boolean,

      onAutoRefreshFailure: any,

      fetchUserParams: any,

      token: any,

      devtools: boolean,

      cookieNameToken: string,

      cookieNameRefreshToken: string,

      maxAgeRefreshToken: number,
   },
  }
}