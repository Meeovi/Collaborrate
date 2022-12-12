import gql from 'graphql-tag'
export const updateOneReviews = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $first_name: NullableStringFieldUpdateOperationsInput!,
    $last_name: NullableStringFieldUpdateOperationsInput!,
    $websites: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
updateOneReviews (
    data: {
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    last_name: $last_name,
    websites: $websites,
    }
    where: {
    id: $id,
    }
  ) } {
    content
    created_at
    first_name
    id
    last_name
    websites
  }`
