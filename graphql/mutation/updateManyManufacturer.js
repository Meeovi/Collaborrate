import gql from 'graphql-tag'
export const updateManyManufacturer = gql`
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
    $name: NullableStringFieldUpdateOperationsInput!,
    $product: NullableBigIntFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $state: NullableStringFieldUpdateOperationsInput!,
    }
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
updateManyManufacturer (
    data: {
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
