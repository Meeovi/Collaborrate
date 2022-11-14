import gql from 'graphql-tag'
export const updateOnePermissions = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $create: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $delete: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $read: NullableStringFieldUpdateOperationsInput!,
    $role: NullableStringFieldUpdateOperationsInput!,
    $update: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOnePermissions (
    data: {
    content: $content,
    create: $create,
    created_at: $created_at,
    delete: $delete,
    id: $id,
    name: $name,
    read: $read,
    role: $role,
    update: $update,
    users: $users,
    }
    where: {
    id: $id,
    }
  ) } {
    content
    create
    created_at
    delete
    id
    name
    read
    role
    update
    users
  }`
