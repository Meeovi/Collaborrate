import gql from 'graphql-tag'
export const updateOneWebsites = gql`
mutation (
    data: {
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
updateOneWebsites (
    data: {
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
