import gql from 'graphql-tag'
export const deleteOneReviews = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneReviews (
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
