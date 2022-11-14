import gql from 'graphql-tag'
export const deleteOneCities = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneCities (
    where: {
    id: $id,
    }
  ) } {
    country
    description
    id
    image
    name
    postalCode
    state
  }`
