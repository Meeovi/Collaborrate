import gql from 'graphql-tag'
export const updateOneShipments = gql`
mutation (
    data: {
    $carrier_name: StringFieldUpdateOperationsInput!,
    $client_id: NullableStringFieldUpdateOperationsInput!,
    $client_secret: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $product: NullableStringFieldUpdateOperationsInput!,
    $ship_date: NullableDateTimeFieldUpdateOperationsInput!,
    $speed_grade: NullableStringFieldUpdateOperationsInput!,
    $tracking_url: NullableStringFieldUpdateOperationsInput!,
    $transit_time: NullableStringFieldUpdateOperationsInput!,
    $website: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneShipments (
    data: {
    carrier_name: $carrier_name,
    client_id: $client_id,
    client_secret: $client_secret,
    country: $country,
    id: $id,
    image: $image,
    product: $product,
    ship_date: $ship_date,
    speed_grade: $speed_grade,
    tracking_url: $tracking_url,
    transit_time: $transit_time,
    website: $website,
    }
    where: {
    id: $id,
    }
  ) } {
    carrier_name
    client_id
    client_secret
    country
    id
    image
    product
    ship_date
    speed_grade
    tracking_url
    transit_time
    website
  }`
