import gql from 'graphql-tag'
export const upsertOneRoles = gql`
mutation (
    create: {
    $content: String!,
    $created_at: DateTime!,
    $role_name: String!!,
    }
    update: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $role_name: StringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneRoles (
    create: {
    content: $content,
    created_at: $created_at,
    role_name: $role_name,
    }
    update: {
    content: $content,
    created_at: $created_at,
    role_name: $role_name,
    }
    where: {
    id: $id,
    }
  ) } {
    content
    created_at
    id
    role_name
  }`
