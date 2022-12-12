import gql from 'graphql-tag'
export const deleteOneChecklist = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneChecklist (
    where: {
    id: $id,
    }
  ) } {
    country
    created_at
    description
    id
    location
    manager
    media
    prod_id
    project
    region
    regional_manager
    task
    ticket
    trainings
    type
    username
  }`
