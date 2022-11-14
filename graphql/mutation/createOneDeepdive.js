import gql from 'graphql-tag'
export const createOneDeepdive = gql`
mutation (
    data: {
    $attendees: String!,
    $content: String!,
    $created_at: DateTime!,
    $end_date: String!,
    $id: BigInt!,
    $login: String!,
    $start_date: String!,
    $whid: String!,
    }
  ) {
createOneDeepdive (
    data: {
    attendees: $attendees,
    content: $content,
    created_at: $created_at,
    end_date: $end_date,
    id: $id,
    login: $login,
    start_date: $start_date,
    whid: $whid,
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
