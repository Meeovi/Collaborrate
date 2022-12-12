import gql from 'graphql-tag'
export const deleteManyPermissions = gql`
mutation (
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
deleteManyPermissions (
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
