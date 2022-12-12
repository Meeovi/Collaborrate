import gql from 'graphql-tag'
export const deleteOneOoto = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneOoto (
    where: {
    id: $id,
    }
  ) } {
    created_at
    end_date
    id
    location
    login
    note
    start_date
    using_time
  }`
