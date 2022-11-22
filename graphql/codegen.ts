
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "./graphql/**/*.gql",
  ignoreNoDocuments: true, // for better experience with the watcher
  watch: true,
  generates: {
    "./graphql/code/gql/": {
      preset: "client",
      config: {
        useTypeImports: true
      },
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
