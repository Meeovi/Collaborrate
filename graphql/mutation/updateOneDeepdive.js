import gql from 'graphql-tag'
export const updateOneDeepdive = gql`
mutation (
    data: {
    $attendees: NullableStringFieldUpdateOperationsInput!,
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $end_date: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $login: NullableStringFieldUpdateOperationsInput!,
    $start_date: NullableStringFieldUpdateOperationsInput!,
    $whid: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneDeepdive (
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
    where: {
    id: $id,
    }
  ) } {
    attendees
    content
    created_at
    end_date
    id
    login
    start_date
    whid
  }`
