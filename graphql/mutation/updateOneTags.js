import gql from 'graphql-tag'
export const updateOneTags = gql`
mutation (
    data: {
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
updateOneTags (
    data: {
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
