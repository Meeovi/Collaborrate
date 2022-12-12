import gql from 'graphql-tag'
export const upsertOneCollections = gql`
mutation (
    create: {
    $created_at: DateTime!,
    $description: String!,
    $id: BigInt!,
    $image: String!,
    $meta_description: String!,
    $meta_keywords: String!,
    $meta_title: String!,
    $name: String!,
    $product: String!,
    }
    update: {
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
    $id: BigInt!,
    }
  ) {
upsertOneCollections (
    create: {
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
    update: {
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
    id: $id,
    }
  ) } {
    created_at
    description
    id
    image
    meta_description
    meta_keywords
    meta_title
    name
    product
  }`
