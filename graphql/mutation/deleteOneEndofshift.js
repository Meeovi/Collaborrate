import gql from 'graphql-tag'
export const deleteOneEndofshift = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneEndofshift (
    where: {
    id: $id,
    }
  ) } {
    content
    created_at
    id
    login
    mcms
    next_shift
    projects
    tickets
    whid
  }`
