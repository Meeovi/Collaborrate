import gql from 'graphql-tag'
export const upsertOneReviews = gql`
mutation (
    create: {
    $comment_id: Int!!,
    $content: String!,
    $created_at: DateTime!,
    $first_name: String!,
    $last_name: String!,
    $shop_id: Int!!,
    $websites: String!,
    }
    update: {
    $comment_id: IntFieldUpdateOperationsInput!,
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $first_name: NullableStringFieldUpdateOperationsInput!,
    $last_name: NullableStringFieldUpdateOperationsInput!,
    $shop_id: IntFieldUpdateOperationsInput!,
    $websites: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneReviews (
    create: {
    comment_id: $comment_id,
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    last_name: $last_name,
    shop_id: $shop_id,
    websites: $websites,
    }
    update: {
    comment_id: $comment_id,
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    last_name: $last_name,
    shop_id: $shop_id,
    websites: $websites,
    }
    where: {
    id: $id,
    }
  ) } {
    comment_id
    content
    created_at
    first_name
    id
    last_name
    shop_id
    websites
  }`
