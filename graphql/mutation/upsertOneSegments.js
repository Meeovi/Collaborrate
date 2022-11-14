import gql from 'graphql-tag'
export const upsertOneSegments = gql`
mutation (
    create: {
    $apply_to: String!,
    $created_at: DateTime!,
    $customers: String!,
    $description: String!,
    $id: BigInt!,
    $name: String!,
    $status: String!,
    $website: String!,
    }
    update: {
    $apply_to: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    $website: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOneSegments (
    create: {
    apply_to: $apply_to,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    id: $id,
    name: $name,
    status: $status,
    website: $website,
    }
    update: {
    apply_to: $apply_to,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    id: $id,
    name: $name,
    status: $status,
    website: $website,
    }
    where: {
    id: $id,
    }
  ) } {
    apply_to
    created_at
    customers
    description
    id
    name
    status
    website
  }`
