import gql from 'graphql-tag'
export const updateManyBrands = gql`
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
updateManyBrands (
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
