import gql from 'graphql-tag'
export const updateOneRoles = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $role_name: StringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
updateOneRoles (
    data: {
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
