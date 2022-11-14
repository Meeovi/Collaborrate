import gql from 'graphql-tag'
export const createManyCities = gql`
mutation (
    data: {
    $country: String!,
    $description: String!,
    $id: Int!,
    $image: String!,
    $name: String!!,
    $postalCode: String!,
    $state: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyCities (
    data: {
    country: $country,
    description: $description,
    id: $id,
    image: $image,
    name: $name,
    postalCode: $postalCode,
    state: $state,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
