import gql from 'graphql-tag'
export const updateOneInternalization = gql`
mutation (
    data: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $default: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $region: NullableStringFieldUpdateOperationsInput!,
    $website: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneInternalization (
    data: {
    created_at: $created_at,
    default: $default,
    description: $description,
    id: $id,
    name: $name,
    region: $region,
    website: $website,
    }
    where: {
    id: $id,
    }
  ) } {
    created_at
    default
    description
    id
    name
    region
    website
  }`
