import gql from 'graphql-tag'
export const deleteOneRewards = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneRewards (
    where: {
    id: $id,
    }
  ) } {
    articles
    categories
    coupons
    created_at
    customers
    expiration
    id
    level
    name
    products
    slug
    users
  }`
