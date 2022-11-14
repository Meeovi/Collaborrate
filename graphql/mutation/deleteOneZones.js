import gql from 'graphql-tag'
export const deleteOneZones = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneZones (
    where: {
    id: $id,
    }
  ) } {
    code
    country
    created_at
    id
    name
    scope
    type
    updated_at
  }`
