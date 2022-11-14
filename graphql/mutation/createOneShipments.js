import gql from 'graphql-tag'
export const createOneShipments = gql`
mutation (
    data: {
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
  ) {
createOneShipments (
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
