import gql from 'graphql-tag'
export const updateManyShipments = gql`
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
    $AND: [ShipmentsWhereInput!]!,
    $NOT: [ShipmentsWhereInput!]!,
    $OR: [ShipmentsWhereInput!]!,
    $carrier_name: StringFilter!,
    $client_id: StringNullableFilter!,
    $client_secret: StringNullableFilter!,
    $country: StringNullableFilter!,
    $id: BigIntFilter!,
    $image: StringNullableFilter!,
    $product: StringNullableFilter!,
    $ship_date: DateTimeNullableFilter!,
    $speed_grade: StringNullableFilter!,
    $tracking_url: StringNullableFilter!,
    $transit_time: StringNullableFilter!,
    $website: StringNullableFilter!,
    }
  ) {
updateManyShipments (
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
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
  ) } {
    count
  }`
