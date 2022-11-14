import gql from 'graphql-tag'
export const upsertOneRewards = gql`
mutation (
    create: {
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
    update: {
    $articles: NullableStringFieldUpdateOperationsInput!,
    $categories: NullableStringFieldUpdateOperationsInput!,
    $coupons: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $expiration: NullableStringFieldUpdateOperationsInput!,
    $level: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $slug: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneRewards (
    create: {
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
    update: {
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
