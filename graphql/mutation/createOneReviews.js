import gql from 'graphql-tag'
export const createOneReviews = gql`
mutation (
    data: {
    $content: String!,
    $created_at: DateTime!,
    $first_name: String!,
    $last_name: String!,
    $websites: String!,
    }
  ) {
createOneReviews (
    data: {
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    last_name: $last_name,
    websites: $websites,
    }
  ) } {
    content
    created_at
    first_name
    id
    last_name
    websites
  }`
