import gql from 'graphql-tag'
export const upsertOneChecklist = gql`
mutation (
    create: {
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
    update: {
    $country: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $location: NullableStringFieldUpdateOperationsInput!,
    $manager: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $prod_id: NullableStringFieldUpdateOperationsInput!,
    $project: NullableStringFieldUpdateOperationsInput!,
    $region: NullableStringFieldUpdateOperationsInput!,
    $regional_manager: NullableStringFieldUpdateOperationsInput!,
    $task: NullableStringFieldUpdateOperationsInput!,
    $ticket: NullableStringFieldUpdateOperationsInput!,
    $trainings: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $username: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOneChecklist (
    create: {
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
    update: {
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
