import gql from 'graphql-tag'
export const updateOneVisits = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $emergency: NullableStringFieldUpdateOperationsInput!,
    $end_date: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $location: NullableStringFieldUpdateOperationsInput!,
    $meeting: NullableStringFieldUpdateOperationsInput!,
    $reason: NullableStringFieldUpdateOperationsInput!,
    $start_date: NullableStringFieldUpdateOperationsInput!,
    $task: NullableStringFieldUpdateOperationsInput!,
    $username: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneVisits (
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
