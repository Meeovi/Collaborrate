import gql from 'graphql-tag'
export const createManyReviews = gql`
mutation (
    data: {
    $content: String!,
    $created_at: DateTime!,
    $first_name: String!,
    $id: Int!,
    $last_name: String!,
    $websites: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyReviews (
    data: {
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    id: $id,
    last_name: $last_name,
    websites: $websites,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
