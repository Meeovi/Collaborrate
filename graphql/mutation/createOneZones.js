import gql from 'graphql-tag'
export const createOneZones = gql`
mutation (
    data: {
    $code: String!,
    $country: String!,
    $created_at: DateTime!,
    $id: BigInt!,
    $name: String!,
    $scope: String!,
    $type: String!,
    $updated_at: DateTime!,
    }
  ) {
createOneZones (
    data: {
    code: $code,
    country: $country,
    created_at: $created_at,
    id: $id,
    name: $name,
    scope: $scope,
    type: $type,
    updated_at: $updated_at,
    }
  ) } {
    code
    country
    created_at
    id
    name
    scope
    type
    updated_at
  }`
