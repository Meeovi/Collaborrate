import gql from 'graphql-tag'
export const updateManyPermissions = gql`
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
    $AND: [PermissionsWhereInput!]!,
    $NOT: [PermissionsWhereInput!]!,
    $OR: [PermissionsWhereInput!]!,
    $content: StringNullableFilter!,
    $create: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $delete: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringNullableFilter!,
    $read: StringNullableFilter!,
    $role: StringNullableFilter!,
    $update: StringNullableFilter!,
    $users: StringNullableFilter!,
    }
  ) {
updateManyPermissions (
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
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
  ) } {
    count
  }`
