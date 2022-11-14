import gql from 'graphql-tag'
export const deleteOneVisits = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneVisits (
    where: {
    id: $id,
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
