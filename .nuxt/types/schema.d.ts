import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["apollo"]?: typeof import("@nuxtjs/apollo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["formkit"]?: typeof import("@formkit/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["monacoEditor"]?: typeof import("nuxt-monaco-editor").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["security"]?: typeof import("nuxt-security").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["naiveUI"]?: typeof import("@huntersofbook/naive-ui-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,

      __MONACO_EDITOR_LOCALE__: string,

      __MONACO_EDITOR_LOCATION__: string,
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

   naiveUI: {
      themeOverrides: any,
   },
  }
}