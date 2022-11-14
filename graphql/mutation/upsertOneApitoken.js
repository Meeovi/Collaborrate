import gql from 'graphql-tag'
export const upsertOneApitoken = gql`
mutation (
    create: {
    $created_at: DateTime!,
    $description: String!,
    $id: BigInt!,
    $name: String!!,
    $token: BigInt!!,
    $token_type: String!,
    }
    update: {
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
upsertOneApitoken (
    create: {
    created_at: $created_at,
    description: $description,
    id: $id,
    name: $name,
    token: $token,
    token_type: $token_type,
    }
    update: {
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
