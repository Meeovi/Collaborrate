import gql from 'graphql-tag'
export const deleteOneManufacturer = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneManufacturer (
    where: {
    id: $id,
    }
  ) } {
    city
    code
    country
    created_at
    description
    id
    isPublic
    media
    name
    product
    products
    state
  }`
