import gql from 'graphql-tag'
export const createOneGlossary = gql`
mutation (
    data: {
    $content: String!,
    $image: String!,
    $name: String!!,
    $published: DateTime!,
    }
  ) {
createOneGlossary (
    data: {
    content: $content,
    image: $image,
    name: $name,
    published: $published,
    }
  ) } {
    content
    id
    image
    name
    published
  }`
