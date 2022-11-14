import gql from 'graphql-tag'
export const upsertOneAgreements = gql`
mutation (
    create: {
    $content: String!,
    $created: DateTime!,
    $excerpt: String!,
    $id: BigInt!,
    $image: String!,
    $mediamanager: String!,
    $name: String!,
    $reference_id: String!,
    $shop_id: String!,
    $type: String!,
    $updated: DateTime!,
    $user_id: String!,
    }
    update: {
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
upsertOneAgreements (
    create: {
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
    update: {
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
