import gql from 'graphql-tag'
export const upsertOneFullfillments = gql`
mutation (
    create: {
    $address: String!,
    $address_two: String!,
    $city: String!,
    $company: String!,
    $country: String!,
    $country_area: String!,
    $created_at: DateTime!,
    $id: BigInt!,
    $name: String!,
    $phone: String!,
    $pickup: String!,
    $shipping_zones: String!,
    $state: String!,
    $stock: String!,
    $zipcode: String!,
    }
    update: {
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
upsertOneFullfillments (
    create: {
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
    update: {
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
