import gql from 'graphql-tag'
export const updateOneApitoken = gql`
mutation (
    data: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $token: BigIntFieldUpdateOperationsInput!,
    $token_type: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    $name: String!,
    $token: BigInt!,
    }
  ) {
updateOneApitoken (
    data: {
    created_at: $created_at,
    description: $description,
    id: $id,
    name: $name,
    token: $token,
    token_type: $token_type,
    }
    where: {
    id: $id,
    name: $name,
    token: $token,
    }
  ) } {
    created_at
    description
    id
    name
    token
    token_type
  }`
