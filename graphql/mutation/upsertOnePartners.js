import gql from 'graphql-tag'
export const upsertOnePartners = gql`
mutation (
    create: {
    $address: String!,
    $business_type: String!,
    $city: String!,
    $country: String!,
    $created_at: DateTime!,
    $id: BigInt!,
    $isPublic: String!,
    $name: String!,
    $state: String!,
    }
    update: {
    $address: NullableStringFieldUpdateOperationsInput!,
    $business_type: NullableStringFieldUpdateOperationsInput!,
    $city: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $isPublic: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $state: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOnePartners (
    create: {
    address: $address,
    business_type: $business_type,
    city: $city,
    country: $country,
    created_at: $created_at,
    id: $id,
    isPublic: $isPublic,
    name: $name,
    state: $state,
    }
    update: {
    address: $address,
    business_type: $business_type,
    city: $city,
    country: $country,
    created_at: $created_at,
    id: $id,
    isPublic: $isPublic,
    name: $name,
    state: $state,
    }
    where: {
    id: $id,
    }
  ) } {
    address
    business_type
    city
    country
    created_at
    id
    isPublic
    name
    state
  }`
