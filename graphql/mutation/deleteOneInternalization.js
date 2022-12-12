import gql from 'graphql-tag'
export const deleteOneInternalization = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneInternalization (
    where: {
    id: $id,
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
