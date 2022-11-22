import gql from 'graphql-tag'
export const updateManyReviews = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $first_name: NullableStringFieldUpdateOperationsInput!,
    $last_name: NullableStringFieldUpdateOperationsInput!,
    $websites: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [ReviewsWhereInput!]!,
    $NOT: [ReviewsWhereInput!]!,
    $OR: [ReviewsWhereInput!]!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $first_name: StringNullableFilter!,
    $id: IntFilter!,
    $last_name: StringNullableFilter!,
    $websites: StringNullableFilter!,
    }
  ) {
updateManyReviews (
    data: {
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    last_name: $last_name,
    websites: $websites,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    id: $id,
    last_name: $last_name,
    websites: $websites,
    }
  ) } {
    count
  }`
