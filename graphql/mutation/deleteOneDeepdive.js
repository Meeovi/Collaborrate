import gql from 'graphql-tag'
export const deleteOneDeepdive = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneDeepdive (
    where: {
    id: $id,
    }
  ) } {
    attendees
    content
    created_at
    end_date
    id
    login
    start_date
    whid
  }`
