import gql from 'graphql-tag'
export const deleteOneBrands = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneBrands (
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
    mediamanager
    name
    product
    products
    state
    workspaces
  }`
