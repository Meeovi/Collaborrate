import gql from 'graphql-tag'
export const createOneInternalization = gql`
mutation (
    data: {
    $created_at: DateTime!,
    $default: String!,
    $description: String!,
    $id: BigInt!,
    $name: String!,
    $region: String!,
    $website: String!,
    }
  ) {
createOneInternalization (
    data: {
    created_at: $created_at,
    default: $default,
    description: $description,
    id: $id,
    name: $name,
    region: $region,
    website: $website,
    }
  ) } {
    created_at
    default
    description
    id
    name
    region
    website
  }`
