import gql from 'graphql-tag'
export const updateManyReviews = gql`
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
    $AND: [ReviewsWhereInput!]!,
    $NOT: [ReviewsWhereInput!]!,
    $OR: [ReviewsWhereInput!]!,
    $comment_id: IntFilter!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $first_name: StringNullableFilter!,
    $id: IntFilter!,
    $last_name: StringNullableFilter!,
    $shop_id: IntFilter!,
    $websites: StringNullableFilter!,
    }
  ) {
updateManyReviews (
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
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    comment_id: $comment_id,
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    id: $id,
    last_name: $last_name,
    shop_id: $shop_id,
    websites: $websites,
    }
  ) } {
    count
  }`
