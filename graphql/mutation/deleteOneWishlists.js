import gql from 'graphql-tag'
export const deleteOneWishlists = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneWishlists (
    where: {
    id: $id,
    }
  ) } {
    created_at
    customers
    id
    name
    occassions
    products
    quantity
    visibility
  }`
