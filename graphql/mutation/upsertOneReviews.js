import gql from 'graphql-tag'
export const upsertOneReviews = gql`
mutation (
    create: {
    $content: String!,
    $created_at: DateTime!,
    $first_name: String!,
    $last_name: String!,
    $websites: String!,
    }
    update: {
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
upsertOneReviews (
    create: {
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    last_name: $last_name,
    websites: $websites,
    }
    update: {
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
