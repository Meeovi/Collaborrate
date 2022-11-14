import gql from 'graphql-tag'
export const updateOneFullfillments = gql`
mutation (
    data: {
    $address: NullableStringFieldUpdateOperationsInput!,
    $address_two: NullableStringFieldUpdateOperationsInput!,
    $city: NullableStringFieldUpdateOperationsInput!,
    $company: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $country_area: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $phone: NullableStringFieldUpdateOperationsInput!,
    $pickup: NullableStringFieldUpdateOperationsInput!,
    $shipping_zones: NullableStringFieldUpdateOperationsInput!,
    $state: NullableStringFieldUpdateOperationsInput!,
    $stock: NullableStringFieldUpdateOperationsInput!,
    $zipcode: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneFullfillments (
    data: {
    address: $address,
    address_two: $address_two,
    city: $city,
    company: $company,
    country: $country,
    country_area: $country_area,
    created_at: $created_at,
    id: $id,
    name: $name,
    phone: $phone,
    pickup: $pickup,
    shipping_zones: $shipping_zones,
    state: $state,
    stock: $stock,
    zipcode: $zipcode,
    }
    where: {
    id: $id,
    }
  ) } {
    address
    address_two
    city
    company
    country
    country_area
    created_at
    id
    name
    phone
    pickup
    shipping_zones
    state
    stock
    zipcode
  }`
