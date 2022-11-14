import gql from 'graphql-tag'
export const deleteManyWishlists = gql`
mutation (
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
deleteManyWishlists (
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
