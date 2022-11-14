import gql from 'graphql-tag'
export const deleteManyManufacturer = gql`
mutation (
    where: {
    $AND: [ManufacturerWhereInput!]!,
    $NOT: [ManufacturerWhereInput!]!,
    $OR: [ManufacturerWhereInput!]!,
    $city: StringNullableFilter!,
    $code: StringNullableFilter!,
    $country: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $isPublic: StringNullableFilter!,
    $media: StringNullableFilter!,
    $name: StringNullableFilter!,
    $product: BigIntNullableFilter!,
    $products: StringNullableFilter!,
    $state: StringNullableFilter!,
    }
  ) {
deleteManyManufacturer (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    city: $city,
    code: $code,
    country: $country,
    created_at: $created_at,
    description: $description,
    id: $id,
    isPublic: $isPublic,
    media: $media,
    name: $name,
    product: $product,
    products: $products,
    state: $state,
    }
  ) } {
    count
  }`
