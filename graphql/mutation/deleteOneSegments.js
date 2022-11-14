import gql from 'graphql-tag'
export const deleteOneSegments = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneSegments (
    where: {
    id: $id,
    }
  ) } {
    apply_to
    created_at
    customers
    description
    id
    name
    status
    website
  }`
