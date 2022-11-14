import gql from 'graphql-tag'
export const upsertOneWebsites = gql`
mutation (
    create: {
    $category: String!,
    $created_at: DateTime!,
    $id: BigInt!,
    $image: String!,
    $name: String!,
    $shop: String!,
    $store: String!,
    $themes: String!,
    $url: String!,
    }
    update: {
    $category: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $shop: NullableStringFieldUpdateOperationsInput!,
    $store: NullableStringFieldUpdateOperationsInput!,
    $themes: NullableStringFieldUpdateOperationsInput!,
    $url: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOneWebsites (
    create: {
    category: $category,
    created_at: $created_at,
    id: $id,
    image: $image,
    name: $name,
    shop: $shop,
    store: $store,
    themes: $themes,
    url: $url,
    }
    update: {
    category: $category,
    created_at: $created_at,
    id: $id,
    image: $image,
    name: $name,
    shop: $shop,
    store: $store,
    themes: $themes,
    url: $url,
    }
    where: {
    id: $id,
    }
  ) } {
    category
    created_at
    id
    image
    name
    shop
    store
    themes
    url
  }`
