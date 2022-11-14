import gql from 'graphql-tag'
export const createManyFullfillments = gql`
mutation (
    data: {
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
    $skipDuplicates: Boolean!,
  ) {
createManyFullfillments (
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
