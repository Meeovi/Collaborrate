import gql from 'graphql-tag'
export const deleteManyBrands = gql`
mutation (
    where: {
    $AND: [BrandsWhereInput!]!,
    $NOT: [BrandsWhereInput!]!,
    $OR: [BrandsWhereInput!]!,
    $city: StringNullableFilter!,
    $code: StringNullableFilter!,
    $country: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $isPublic: StringNullableFilter!,
    $media: StringNullableFilter!,
    $mediamanager: StringNullableFilter!,
    $name: StringNullableFilter!,
    $product: BigIntNullableFilter!,
    $products: StringNullableFilter!,
    $state: StringNullableFilter!,
    $workspaces: StringNullableFilter!,
    }
  ) {
deleteManyBrands (
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
    mediamanager: $mediamanager,
    name: $name,
    product: $product,
    products: $products,
    state: $state,
    workspaces: $workspaces,
    }
  ) } {
    count
  }`
