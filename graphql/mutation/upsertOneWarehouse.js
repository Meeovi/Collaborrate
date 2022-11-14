import gql from 'graphql-tag'
export const upsertOneWarehouse = gql`
mutation (
    create: {
    $category: String!,
    $city: String!,
    $country: String!,
    $created_at: DateTime!,
    $description: String!,
    $id: BigInt!,
    $image: String!,
    $isPublic: String!,
    $name: String!,
    $postal: String!,
    $products: String!,
    $state: String!,
    $status: String!,
    }
    update: {
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
    $id: BigInt!,
    }
  ) {
upsertOneWarehouse (
    create: {
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
    update: {
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
    id: $id,
    }
  ) } {
    category
    city
    country
    created_at
    description
    id
    image
    isPublic
    name
    postal
    products
    state
    status
  }`
