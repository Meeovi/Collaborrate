import gql from 'graphql-tag'
export const createOneReviews = gql`
mutation (
    data: {
    $comment_id: Int!!,
    $content: String!,
    $created_at: DateTime!,
    $first_name: String!,
    $last_name: String!,
    $shop_id: Int!!,
    $websites: String!,
    }
  ) {
createOneReviews (
    data: {
    comment_id: $comment_id,
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    last_name: $last_name,
    shop_id: $shop_id,
    websites: $websites,
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
