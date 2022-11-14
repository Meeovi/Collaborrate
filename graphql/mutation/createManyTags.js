import gql from 'graphql-tag'
export const createManyTags = gql`
mutation (
    data: {
    $articles: String!,
    $categories: String!,
    $customers: String!,
    $excerpt: String!,
    $id: Int!,
    $name: String!!,
    $products: String!,
    $users: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyTags (
    data: {
    articles: $articles,
    categories: $categories,
    customers: $customers,
    excerpt: $excerpt,
    id: $id,
    name: $name,
    products: $products,
    users: $users,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
