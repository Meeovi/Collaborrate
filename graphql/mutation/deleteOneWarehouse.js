import gql from 'graphql-tag'
export const deleteOneWarehouse = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneWarehouse (
    where: {
    id: $id,
    }
  ) } {
    category
    city
    country
    created_at
    description
    id
    image
    isPublic
    name
    postal
    products
    state
    status
  }`
