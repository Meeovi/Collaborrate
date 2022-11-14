import gql from 'graphql-tag'
export const createOneRewards = gql`
mutation (
    data: {
    $articles: String!,
    $categories: String!,
    $coupons: String!,
    $created_at: DateTime!,
    $customers: String!,
    $expiration: String!,
    $level: String!,
    $name: String!!,
    $products: String!,
    $slug: String!,
    $users: String!,
    }
  ) {
createOneRewards (
    data: {
    articles: $articles,
    categories: $categories,
    coupons: $coupons,
    created_at: $created_at,
    customers: $customers,
    expiration: $expiration,
    level: $level,
    name: $name,
    products: $products,
    slug: $slug,
    users: $users,
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
