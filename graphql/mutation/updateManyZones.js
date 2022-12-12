import gql from 'graphql-tag'
export const updateManyZones = gql`
mutation (
    data: {
    $code: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $scope: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $updated_at: NullableDateTimeFieldUpdateOperationsInput!,
    }
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
updateManyZones (
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
