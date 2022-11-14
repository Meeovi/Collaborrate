import gql from 'graphql-tag'
export const createManyPartners = gql`
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
    $skipDuplicates: Boolean!,
  ) {
createManyPartners (
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
