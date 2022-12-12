import gql from 'graphql-tag'
export const updateOneAgreements = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $created: NullableDateTimeFieldUpdateOperationsInput!,
    $excerpt: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $mediamanager: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $reference_id: NullableStringFieldUpdateOperationsInput!,
    $shop_id: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $updated: NullableDateTimeFieldUpdateOperationsInput!,
    $user_id: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneAgreements (
    data: {
    content: $content,
    created: $created,
    excerpt: $excerpt,
    id: $id,
    image: $image,
    mediamanager: $mediamanager,
    name: $name,
    reference_id: $reference_id,
    shop_id: $shop_id,
    type: $type,
    updated: $updated,
    user_id: $user_id,
    }
    where: {
    id: $id,
    }
  ) } {
    content
    created
    excerpt
    id
    image
    mediamanager
    name
    reference_id
    shop_id
    type
    updated
    user_id
  }`
