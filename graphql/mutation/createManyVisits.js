import gql from 'graphql-tag'
export const createManyVisits = gql`
mutation (
    data: {
    $content: String!,
    $created_at: DateTime!,
    $emergency: String!,
    $end_date: String!,
    $id: BigInt!,
    $location: String!,
    $meeting: String!,
    $reason: String!,
    $start_date: String!,
    $task: String!,
    $username: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyVisits (
    data: {
    content: $content,
    created_at: $created_at,
    emergency: $emergency,
    end_date: $end_date,
    id: $id,
    location: $location,
    meeting: $meeting,
    reason: $reason,
    start_date: $start_date,
    task: $task,
    username: $username,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
