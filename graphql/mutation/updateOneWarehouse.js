import gql from 'graphql-tag'
export const updateOneWarehouse = gql`
mutation (
    data: {
    $category: NullableStringFieldUpdateOperationsInput!,
    $city: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $isPublic: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $postal: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $state: NullableStringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneWarehouse (
    data: {
    category: $category,
    city: $city,
    country: $country,
    created_at: $created_at,
    description: $description,
    id: $id,
    image: $image,
    isPublic: $isPublic,
    name: $name,
    postal: $postal,
    products: $products,
    state: $state,
    status: $status,
    }
    where: {
    id: $id,
    }
  ) } {
    category
    city
    country
    created_at
    description
    id
    image
    isPublic
    name
    postal
    products
    state
    status
  }`
