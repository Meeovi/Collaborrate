import gql from 'graphql-tag'
export const upsertOneDeepdive = gql`
mutation (
    create: {
    $attendees: String!,
    $content: String!,
    $created_at: DateTime!,
    $end_date: String!,
    $id: BigInt!,
    $login: String!,
    $start_date: String!,
    $whid: String!,
    }
    update: {
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
upsertOneDeepdive (
    create: {
    attendees: $attendees,
    content: $content,
    created_at: $created_at,
    end_date: $end_date,
    id: $id,
    login: $login,
    start_date: $start_date,
    whid: $whid,
    }
    update: {
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
