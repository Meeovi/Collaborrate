import gql from 'graphql-tag'
export const updateOneWishlists = gql`
mutation (
    data: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $occassions: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $quantity: NullableStringFieldUpdateOperationsInput!,
    $visibility: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneWishlists (
    data: {
    created_at: $created_at,
    customers: $customers,
    id: $id,
    name: $name,
    occassions: $occassions,
    products: $products,
    quantity: $quantity,
    visibility: $visibility,
    }
    where: {
    id: $id,
    }
  ) } {
    created_at
    customers
    id
    name
    occassions
    products
    quantity
    visibility
  }`
