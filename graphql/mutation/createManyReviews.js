import gql from 'graphql-tag'
export const createManyReviews = gql`
mutation (
    data: {
    $comment_id: Int!!,
    $content: String!,
    $created_at: DateTime!,
    $first_name: String!,
    $id: Int!,
    $last_name: String!,
    $shop_id: Int!!,
    $websites: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyReviews (
    data: {
    comment_id: $comment_id,
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    id: $id,
    last_name: $last_name,
    shop_id: $shop_id,
    websites: $websites,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
