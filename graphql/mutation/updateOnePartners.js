import gql from 'graphql-tag'
export const updateOnePartners = gql`
mutation (
    data: {
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
updateOnePartners (
    data: {
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
