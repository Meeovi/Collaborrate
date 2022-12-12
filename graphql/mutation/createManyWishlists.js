import gql from 'graphql-tag'
export const createManyWishlists = gql`
mutation (
    data: {
    $created_at: DateTime!,
    $customers: String!,
    $id: BigInt!,
    $name: String!,
    $occassions: String!,
    $products: String!,
    $quantity: String!,
    $visibility: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyWishlists (
    data: {
    created_at: $created_at,
    customers: $customers,
    id: $id,
    name: $name,
    occassions: $occassions,
    products: $products,
    quantity: $quantity,
    visibility: $visibility,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
