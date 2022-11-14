import gql from 'graphql-tag'
export const upsertOneIntegrations = gql`
mutation (
    create: {
    $category: String!,
    $content: String!,
    $created_at: DateTime!,
    $id: BigInt!,
    $location: String!,
    $media: String!,
    $name: String!,
    }
    update: {
    $category: NullableStringFieldUpdateOperationsInput!,
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $location: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOneIntegrations (
    create: {
    category: $category,
    content: $content,
    created_at: $created_at,
    id: $id,
    location: $location,
    media: $media,
    name: $name,
    }
    update: {
    category: $category,
    content: $content,
    created_at: $created_at,
    id: $id,
    location: $location,
    media: $media,
    name: $name,
    }
    where: {
    id: $id,
    }
  ) } {
    category
    content
    created_at
    id
    location
    media
    name
  }`
