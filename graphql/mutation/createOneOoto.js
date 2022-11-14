import gql from 'graphql-tag'
export const createOneOoto = gql`
mutation (
    data: {
    $created_at: DateTime!,
    $end_date: String!,
    $id: BigInt!,
    $location: String!,
    $login: String!,
    $note: String!,
    $start_date: String!,
    $using_time: String!,
    }
  ) {
createOneOoto (
    data: {
    created_at: $created_at,
    end_date: $end_date,
    id: $id,
    location: $location,
    login: $login,
    note: $note,
    start_date: $start_date,
    using_time: $using_time,
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
