import gql from 'graphql-tag'
export const createManyGlossary = gql`
mutation (
    data: {
    $content: String!,
    $id: Int!,
    $image: String!,
    $name: String!!,
    $published: DateTime!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyGlossary (
    data: {
    content: $content,
    id: $id,
    image: $image,
    name: $name,
    published: $published,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
