
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "./graphql/**/*.gql",
  ignoreNoDocuments: true, // for better experience with the watcher
  watch: true,
  generates: {
    "graphql/": {
      preset: "client",
      config: {
        useTypeImports: true,
        federation: true
      },
      plugins: []
    },
    "../graphql/generated-schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
