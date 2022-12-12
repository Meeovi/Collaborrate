import gql from 'graphql-tag'
export const createManyRewards = gql`
mutation (
    data: {
    $articles: String!,
    $categories: String!,
    $coupons: String!,
    $created_at: DateTime!,
    $customers: String!,
    $expiration: String!,
    $id: Int!,
    $level: String!,
    $name: String!!,
    $products: String!,
    $slug: String!,
    $users: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyRewards (
    data: {
    articles: $articles,
    categories: $categories,
    coupons: $coupons,
    created_at: $created_at,
    customers: $customers,
    expiration: $expiration,
    id: $id,
    level: $level,
    name: $name,
    products: $products,
    slug: $slug,
    users: $users,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
