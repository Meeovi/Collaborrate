import gql from 'graphql-tag'
export const deleteManyZones = gql`
mutation (
    where: {
    $AND: [ZonesWhereInput!]!,
    $NOT: [ZonesWhereInput!]!,
    $OR: [ZonesWhereInput!]!,
    $code: StringNullableFilter!,
    $country: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $id: BigIntFilter!,
    $name: StringNullableFilter!,
    $scope: StringNullableFilter!,
    $type: StringNullableFilter!,
    $updated_at: DateTimeNullableFilter!,
    }
  ) {
deleteManyZones (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
    count
  }`
