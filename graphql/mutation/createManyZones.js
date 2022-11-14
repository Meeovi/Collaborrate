import gql from 'graphql-tag'
export const createManyZones = gql`
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
    $skipDuplicates: Boolean!,
  ) {
createManyZones (
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
