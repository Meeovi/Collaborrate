import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["apollo"]?: typeof import("@nuxtjs/apollo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["security"]?: typeof import("nuxt-security").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["meilisearch"]?: typeof import("nuxt-meilisearch").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["directus"]?: typeof import("nuxt-directus").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["naiveUI"]?: typeof import("@huntersofbook/naive-ui-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-config-schema"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/apollo", NuxtConfig["apollo"]] | ["@nuxt/content", NuxtConfig["content"]] | ["@nuxtjs/i18n", NuxtConfig["i18n"]] | ["nuxt-security", NuxtConfig["security"]] | ["nuxt-meilisearch", NuxtConfig["meilisearch"]] | ["nuxt-directus", NuxtConfig["directus"]] | ["@huntersofbook/naive-ui-nuxt", NuxtConfig["naiveUI"]] | ["nuxt-config-schema", NuxtConfig["nuxt-config-schema"]] | ["@nuxt/telemetry", NuxtConfig["telemetry"]])[],
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

   security: {
      headers: {
         crossOriginResourcePolicy: {
            value: string,

            route: string,
         },

         crossOriginOpenerPolicy: {
            value: string,

            route: string,
         },

         crossOriginEmbedderPolicy: {
            value: string,

            route: string,
         },

         contentSecurityPolicy: {
            value: {
               "base-uri": Array<string>,

               "font-src": Array<string>,

               "form-action": Array<string>,

               "frame-ancestors": Array<string>,

               "img-src": Array<string>,

               "object-src": Array<string>,

               "script-src-attr": Array<string>,

               "style-src": Array<string>,

               "upgrade-insecure-requests": boolean,
            },

            route: string,
         },

         originAgentCluster: {
            value: string,

            route: string,
         },

         referrerPolicy: {
            value: string,

            route: string,
         },

         strictTransportSecurity: {
            value: {
               maxAge: number,

               includeSubdomains: boolean,
            },

            route: string,
         },

         xContentTypeOptions: {
            value: string,

            route: string,
         },

         xDNSPrefetchControl: {
            value: string,

            route: string,
         },

         xDownloadOptions: {
            value: string,

            route: string,
         },

         xFrameOptions: {
            value: string,

            route: string,
         },

         xPermittedCrossDomainPolicies: {
            value: string,

            route: string,
         },

         xXSSProtection: {
            value: string,

            route: string,
         },
      },

      requestSizeLimiter: {
         value: {
            maxRequestSizeInBytes: number,

            maxUploadFileRequestInBytes: number,
         },

         route: string,

         throwError: boolean,
      },

      rateLimiter: {
         value: {
            tokensPerInterval: number,

            interval: string,

            fireImmediately: boolean,
         },

         route: string,

         throwError: boolean,
      },

      xssValidator: {
         value: any,

         route: string,

         throwError: boolean,
      },

      corsHandler: {
         value: {
            origin: string,

            methods: Array<string>,

            preflight: {
               statusCode: number,
            },
         },

         route: string,

         throwError: boolean,
      },

      allowedMethodsRestricter: {
         value: string,

         route: string,

         throwError: boolean,
      },

      hidePoweredBy: boolean,

      basicAuth: boolean,

      enabled: boolean,
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

      fetchUserParams: any,

      token: any,
   },

   naiveUI: {
      themeOverrides: any,
   },
  }
}