import gql from 'graphql-tag'
export const createManyDeepdive = gql`
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
    $skipDuplicates: Boolean!,
  ) {
createManyDeepdive (
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
