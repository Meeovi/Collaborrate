import gql from 'graphql-tag'
export const updateOneReviews = gql`
mutation (
    data: {
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
updateOneReviews (
    data: {
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
