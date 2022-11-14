import gql from 'graphql-tag'
export const updateOneChecklist = gql`
mutation (
    data: {
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
updateOneChecklist (
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
