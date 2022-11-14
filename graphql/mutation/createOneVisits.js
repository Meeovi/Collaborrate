import gql from 'graphql-tag'
export const createOneVisits = gql`
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
  ) {
createOneVisits (
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
  ) } {
    content
    created_at
    emergency
    end_date
    id
    location
    meeting
    reason
    start_date
    task
    username
  }`
