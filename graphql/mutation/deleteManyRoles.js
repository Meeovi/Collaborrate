import gql from 'graphql-tag'
export const deleteManyRoles = gql`
mutation (
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
deleteManyRoles (
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
