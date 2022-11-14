import gql from 'graphql-tag'
export const upsertOneShipments = gql`
mutation (
    create: {
    $carrier_name: String!!,
    $client_id: String!,
    $client_secret: String!,
    $country: String!,
    $id: BigInt!,
    $image: String!,
    $product: String!,
    $ship_date: DateTime!,
    $speed_grade: String!,
    $tracking_url: String!,
    $transit_time: String!,
    $website: String!,
    }
    update: {
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
upsertOneShipments (
    create: {
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
    update: {
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
