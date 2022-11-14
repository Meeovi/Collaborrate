import gql from 'graphql-tag'
export const upsertOneOoto = gql`
mutation (
    create: {
    $created_at: DateTime!,
    $end_date: String!,
    $id: BigInt!,
    $location: String!,
    $login: String!,
    $note: String!,
    $start_date: String!,
    $using_time: String!,
    }
    update: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $end_date: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $location: NullableStringFieldUpdateOperationsInput!,
    $login: NullableStringFieldUpdateOperationsInput!,
    $note: NullableStringFieldUpdateOperationsInput!,
    $start_date: NullableStringFieldUpdateOperationsInput!,
    $using_time: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOneOoto (
    create: {
    created_at: $created_at,
    end_date: $end_date,
    id: $id,
    location: $location,
    login: $login,
    note: $note,
    start_date: $start_date,
    using_time: $using_time,
    }
    update: {
    created_at: $created_at,
    end_date: $end_date,
    id: $id,
    location: $location,
    login: $login,
    note: $note,
    start_date: $start_date,
    using_time: $using_time,
    }
    where: {
    id: $id,
    }
  ) } {
    created_at
    end_date
    id
    location
    login
    note
    start_date
    using_time
  }`
