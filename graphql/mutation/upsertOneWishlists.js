import gql from 'graphql-tag'
export const upsertOneWishlists = gql`
mutation (
    create: {
    $created_at: DateTime!,
    $customers: String!,
    $id: BigInt!,
    $name: String!,
    $occassions: String!,
    $products: String!,
    $quantity: String!,
    $visibility: String!,
    }
    update: {
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
upsertOneWishlists (
    create: {
    created_at: $created_at,
    customers: $customers,
    id: $id,
    name: $name,
    occassions: $occassions,
    products: $products,
    quantity: $quantity,
    visibility: $visibility,
    }
    update: {
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
