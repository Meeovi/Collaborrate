const gqlg = require('gql-generator')

gqlg({ schemaFilePath: '../server/generated-schema.graphql', destDirPath: '/generated/'})