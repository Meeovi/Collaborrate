import gql from 'graphql-tag'
export const updateManyUsers = gql`
mutation (
    data: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $email: StringFieldUpdateOperationsInput!,
    $emails: NullableStringFieldUpdateOperationsInput!,
    $first_name: StringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $interface_locale: NullableStringFieldUpdateOperationsInput!,
    $last_name: NullableStringFieldUpdateOperationsInput!,
    $mediamanager: NullableStringFieldUpdateOperationsInput!,
    $messages: NullableStringFieldUpdateOperationsInput!,
    $password: StringFieldUpdateOperationsInput!,
    $permissions: NullableStringFieldUpdateOperationsInput!,
    $projects: NullableStringFieldUpdateOperationsInput!,
    $username: StringFieldUpdateOperationsInput!,
    $value: NullableStringFieldUpdateOperationsInput!,
    $workspaces: NullableStringFieldUpdateOperationsInput!,
    }
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
updateManyUsers (
    data: {
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
