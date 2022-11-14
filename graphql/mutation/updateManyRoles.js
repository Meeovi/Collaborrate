import gql from 'graphql-tag'
export const updateManyRoles = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $role_name: StringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [RolesWhereInput!]!,
    $NOT: [RolesWhereInput!]!,
    $OR: [RolesWhereInput!]!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $id: IntFilter!,
    $role_name: StringFilter!,
    }
  ) {
updateManyRoles (
    data: {
    content: $content,
    created_at: $created_at,
    role_name: $role_name,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    content: $content,
    created_at: $created_at,
    id: $id,
    role_name: $role_name,
    }
  ) } {
    count
  }`
