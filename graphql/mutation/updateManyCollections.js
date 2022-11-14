import gql from 'graphql-tag'
export const updateManyCollections = gql`
mutation (
    data: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $meta_description: NullableStringFieldUpdateOperationsInput!,
    $meta_keywords: NullableStringFieldUpdateOperationsInput!,
    $meta_title: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $product: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [CollectionsWhereInput!]!,
    $NOT: [CollectionsWhereInput!]!,
    $OR: [CollectionsWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $image: StringNullableFilter!,
    $meta_description: StringNullableFilter!,
    $meta_keywords: StringNullableFilter!,
    $meta_title: StringNullableFilter!,
    $name: StringNullableFilter!,
    $product: StringNullableFilter!,
    }
  ) {
updateManyCollections (
    data: {
    created_at: $created_at,
    description: $description,
    id: $id,
    image: $image,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    name: $name,
    product: $product,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    created_at: $created_at,
    description: $description,
    id: $id,
    image: $image,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    name: $name,
    product: $product,
    }
  ) } {
    count
  }`
