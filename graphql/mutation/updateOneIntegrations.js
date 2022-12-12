import gql from 'graphql-tag'
export const updateOneIntegrations = gql`
mutation (
    data: {
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
updateOneIntegrations (
    data: {
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
