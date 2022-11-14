import gql from 'graphql-tag'
export const upsertOneInternalization = gql`
mutation (
    create: {
    $created_at: DateTime!,
    $default: String!,
    $description: String!,
    $id: BigInt!,
    $name: String!,
    $region: String!,
    $website: String!,
    }
    update: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $default: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $region: NullableStringFieldUpdateOperationsInput!,
    $website: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOneInternalization (
    create: {
    created_at: $created_at,
    default: $default,
    description: $description,
    id: $id,
    name: $name,
    region: $region,
    website: $website,
    }
    update: {
    created_at: $created_at,
    default: $default,
    description: $description,
    id: $id,
    name: $name,
    region: $region,
    website: $website,
    }
    where: {
    id: $id,
    }
  ) } {
    created_at
    default
    description
    id
    name
    region
    website
  }`
