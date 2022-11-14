import gql from 'graphql-tag'
export const deleteManyUsers = gql`
mutation (
    where: {
    $AND: [UsersWhereInput!]!,
    $NOT: [UsersWhereInput!]!,
    $OR: [UsersWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $email: StringFilter!,
    $emails: StringNullableFilter!,
    $first_name: StringFilter!,
    $id: BigIntFilter!,
    $interface_locale: StringNullableFilter!,
    $last_name: StringNullableFilter!,
    $mediamanager: StringNullableFilter!,
    $messages: StringNullableFilter!,
    $password: StringFilter!,
    $permissions: StringNullableFilter!,
    $projects: StringNullableFilter!,
    $username: StringFilter!,
    $value: StringNullableFilter!,
    $workspaces: StringNullableFilter!,
    }
  ) {
deleteManyUsers (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    created_at: $created_at,
    email: $email,
    emails: $emails,
    first_name: $first_name,
    id: $id,
    interface_locale: $interface_locale,
    last_name: $last_name,
    mediamanager: $mediamanager,
    messages: $messages,
    password: $password,
    permissions: $permissions,
    projects: $projects,
    username: $username,
    value: $value,
    workspaces: $workspaces,
    }
  ) } {
    count
  }`
