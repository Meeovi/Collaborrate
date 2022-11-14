import gql from 'graphql-tag'
export const createOneChecklist = gql`
mutation (
    data: {
    $country: String!,
    $created_at: DateTime!,
    $description: String!,
    $id: BigInt!,
    $location: String!,
    $manager: String!,
    $media: String!,
    $prod_id: String!,
    $project: String!,
    $region: String!,
    $regional_manager: String!,
    $task: String!,
    $ticket: String!,
    $trainings: String!,
    $type: String!,
    $username: String!,
    }
  ) {
createOneChecklist (
    data: {
    country: $country,
    created_at: $created_at,
    description: $description,
    id: $id,
    location: $location,
    manager: $manager,
    media: $media,
    prod_id: $prod_id,
    project: $project,
    region: $region,
    regional_manager: $regional_manager,
    task: $task,
    ticket: $ticket,
    trainings: $trainings,
    type: $type,
    username: $username,
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
