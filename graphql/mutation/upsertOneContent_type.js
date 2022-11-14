import gql from 'graphql-tag'
export const upsertOneContent_type = gql`
mutation (
    create: {
    $boolean: Boolean!,
    $created_at: DateTime!,
    $database_name: String!,
    $date: DateTime!,
    $email: String!,
    $id: BigInt!,
    $json: JSON!,
    $link: String!,
    $media: String!,
    $number: Decimal!,
    $password: String!,
    $rich_text: String!,
    $text: String!,
    $time: DateTime!,
    $timestamp: DateTime!,
    $uid: String!,
    }
    update: {
    $boolean: NullableBoolFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $database_name: NullableStringFieldUpdateOperationsInput!,
    $date: NullableDateTimeFieldUpdateOperationsInput!,
    $email: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $json: JSON!,
    $link: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $number: NullableDecimalFieldUpdateOperationsInput!,
    $password: NullableStringFieldUpdateOperationsInput!,
    $rich_text: NullableStringFieldUpdateOperationsInput!,
    $text: NullableStringFieldUpdateOperationsInput!,
    $time: NullableDateTimeFieldUpdateOperationsInput!,
    $timestamp: NullableDateTimeFieldUpdateOperationsInput!,
    $uid: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOneContent_type (
    create: {
    boolean: $boolean,
    created_at: $created_at,
    database_name: $database_name,
    date: $date,
    email: $email,
    id: $id,
    json: $json,
    link: $link,
    media: $media,
    number: $number,
    password: $password,
    rich_text: $rich_text,
    text: $text,
    time: $time,
    timestamp: $timestamp,
    uid: $uid,
    }
    update: {
    boolean: $boolean,
    created_at: $created_at,
    database_name: $database_name,
    date: $date,
    email: $email,
    id: $id,
    json: $json,
    link: $link,
    media: $media,
    number: $number,
    password: $password,
    rich_text: $rich_text,
    text: $text,
    time: $time,
    timestamp: $timestamp,
    uid: $uid,
    }
    where: {
    id: $id,
    }
  ) } {
    boolean
    created_at
    database_name
    date
    email
    id
    json
    link
    media
    number
    password
    rich_text
    text
    time
    timestamp
    uid
  }`
