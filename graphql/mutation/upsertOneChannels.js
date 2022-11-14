import gql from 'graphql-tag'
export const upsertOneChannels = gql`
mutation (
    create: {
    $client_id: String!,
    $client_secret: String!,
    $code: String!,
    $created_at: DateTime!,
    $currency: String!,
    $default_lang: String!,
    $default_shipping: String!,
    $default_zone: String!,
    $id: BigInt!,
    $include_tax: String!,
    $name: String!,
    }
    update: {
    $client_id: NullableStringFieldUpdateOperationsInput!,
    $client_secret: NullableStringFieldUpdateOperationsInput!,
    $code: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $currency: NullableStringFieldUpdateOperationsInput!,
    $default_lang: NullableStringFieldUpdateOperationsInput!,
    $default_shipping: NullableStringFieldUpdateOperationsInput!,
    $default_zone: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $include_tax: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOneChannels (
    create: {
    client_id: $client_id,
    client_secret: $client_secret,
    code: $code,
    created_at: $created_at,
    currency: $currency,
    default_lang: $default_lang,
    default_shipping: $default_shipping,
    default_zone: $default_zone,
    id: $id,
    include_tax: $include_tax,
    name: $name,
    }
    update: {
    client_id: $client_id,
    client_secret: $client_secret,
    code: $code,
    created_at: $created_at,
    currency: $currency,
    default_lang: $default_lang,
    default_shipping: $default_shipping,
    default_zone: $default_zone,
    id: $id,
    include_tax: $include_tax,
    name: $name,
    }
    where: {
    id: $id,
    }
  ) } {
    client_id
    client_secret
    code
    created_at
    currency
    default_lang
    default_shipping
    default_zone
    id
    include_tax
    name
  }`
