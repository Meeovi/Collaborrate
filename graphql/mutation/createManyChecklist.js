import gql from 'graphql-tag'
export const createManyChecklist = gql`
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
    $skipDuplicates: Boolean!,
  ) {
createManyChecklist (
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
