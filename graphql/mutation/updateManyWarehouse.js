import gql from 'graphql-tag'
export const updateManyWarehouse = gql`
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
updateManyWarehouse (
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
