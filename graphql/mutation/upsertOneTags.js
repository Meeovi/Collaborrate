import gql from 'graphql-tag'
export const upsertOneTags = gql`
mutation (
    create: {
    $articles: String!,
    $categories: String!,
    $customers: String!,
    $excerpt: String!,
    $name: String!!,
    $products: String!,
    $users: String!,
    }
    update: {
    $articles: NullableStringFieldUpdateOperationsInput!,
    $categories: NullableStringFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $excerpt: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneTags (
    create: {
    articles: $articles,
    categories: $categories,
    customers: $customers,
    excerpt: $excerpt,
    name: $name,
    products: $products,
    users: $users,
    }
    update: {
    articles: $articles,
    categories: $categories,
    customers: $customers,
    excerpt: $excerpt,
    name: $name,
    products: $products,
    users: $users,
    }
    where: {
    id: $id,
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
