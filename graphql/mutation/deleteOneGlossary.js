import gql from 'graphql-tag'
export const deleteOneGlossary = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneGlossary (
    where: {
    id: $id,
    }
  ) } {
    content
    id
    image
    name
    published
  }`
