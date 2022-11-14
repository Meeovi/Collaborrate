import gql from 'graphql-tag'
export const deleteManyWarehouse = gql`
mutation (
    where: {
    $AND: [WarehouseWhereInput!]!,
    $NOT: [WarehouseWhereInput!]!,
    $OR: [WarehouseWhereInput!]!,
    $category: StringNullableFilter!,
    $city: StringNullableFilter!,
    $country: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $image: StringNullableFilter!,
    $isPublic: StringNullableFilter!,
    $name: StringNullableFilter!,
    $postal: StringNullableFilter!,
    $products: StringNullableFilter!,
    $state: StringNullableFilter!,
    $status: StringNullableFilter!,
    }
  ) {
deleteManyWarehouse (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
  ) } {
    count
  }`
