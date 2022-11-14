import gql from 'graphql-tag'
export const upsertOneZones = gql`
mutation (
    create: {
    $code: String!,
    $country: String!,
    $created_at: DateTime!,
    $id: BigInt!,
    $name: String!,
    $scope: String!,
    $type: String!,
    $updated_at: DateTime!,
    }
    update: {
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
    $id: BigInt!,
    }
  ) {
upsertOneZones (
    create: {
    code: $code,
    country: $country,
    created_at: $created_at,
    id: $id,
    name: $name,
    scope: $scope,
    type: $type,
    updated_at: $updated_at,
    }
    update: {
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
    id: $id,
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
