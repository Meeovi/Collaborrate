import gql from 'graphql-tag'
export const updateManyWishlists = gql`
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
    $AND: [WishlistsWhereInput!]!,
    $NOT: [WishlistsWhereInput!]!,
    $OR: [WishlistsWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $customers: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringNullableFilter!,
    $occassions: StringNullableFilter!,
    $products: StringNullableFilter!,
    $quantity: StringNullableFilter!,
    $visibility: StringNullableFilter!,
    }
  ) {
updateManyWishlists (
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
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    created_at: $created_at,
    customers: $customers,
    id: $id,
    name: $name,
    occassions: $occassions,
    products: $products,
    quantity: $quantity,
    visibility: $visibility,
    }
  ) } {
    count
  }`
