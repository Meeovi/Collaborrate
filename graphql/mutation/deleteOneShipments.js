import gql from 'graphql-tag'
export const deleteOneShipments = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneShipments (
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
