import gql from 'graphql-tag'
export const createOneCities = gql`
mutation (
    data: {
    $country: String!,
    $description: String!,
    $image: String!,
    $name: String!!,
    $postalCode: String!,
    $state: String!,
    }
  ) {
createOneCities (
    data: {
    country: $country,
    description: $description,
    image: $image,
    name: $name,
    postalCode: $postalCode,
    state: $state,
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
