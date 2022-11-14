import gql from 'graphql-tag'
export const createOneTags = gql`
mutation (
    data: {
    $articles: String!,
    $categories: String!,
    $customers: String!,
    $excerpt: String!,
    $name: String!!,
    $products: String!,
    $users: String!,
    }
  ) {
createOneTags (
    data: {
    articles: $articles,
    categories: $categories,
    customers: $customers,
    excerpt: $excerpt,
    name: $name,
    products: $products,
    users: $users,
    }
  ) } {
    articles
    categories
    customers
    excerpt
    id
    name
    products
    users
  }`
