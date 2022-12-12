import gql from 'graphql-tag'
export const createOnePartners = gql`
mutation (
    data: {
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
  ) {
createOnePartners (
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
