import gql from 'graphql-tag'
export const updateOneBrands = gql`
mutation (
    data: {
    $city: NullableStringFieldUpdateOperationsInput!,
    $code: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $isPublic: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $mediamanager: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $product: NullableBigIntFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $state: NullableStringFieldUpdateOperationsInput!,
    $workspaces: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneBrands (
    data: {
    city: $city,
    code: $code,
    country: $country,
    created_at: $created_at,
    description: $description,
    id: $id,
    isPublic: $isPublic,
    media: $media,
    mediamanager: $mediamanager,
    name: $name,
    product: $product,
    products: $products,
    state: $state,
    workspaces: $workspaces,
    }
    where: {
    id: $id,
    }
  ) } {
    city
    code
    country
    created_at
    description
    id
    isPublic
    media
    mediamanager
    name
    product
    products
    state
    workspaces
  }`
