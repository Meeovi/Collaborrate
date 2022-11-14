import gql from 'graphql-tag'
export const upsertOneUsers = gql`
mutation (
    create: {
    $created_at: DateTime!,
    $email: String!!,
    $emails: String!,
    $first_name: String!!,
    $id: BigInt!,
    $interface_locale: String!,
    $last_name: String!,
    $mediamanager: String!,
    $messages: String!,
    $password: String!!,
    $permissions: String!,
    $projects: String!,
    $username: String!!,
    $value: String!,
    $workspaces: String!,
    }
    update: {
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
    $id: BigInt!,
    }
  ) {
upsertOneUsers (
    create: {
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
    update: {
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
    id: $id,
    }
  ) } {
    created_at
    email
    emails
    first_name
    id
    interface_locale
    last_name
    mediamanager
    messages
    password
    permissions
    projects
    username
    value
    workspaces
  }`
