import gql from 'graphql-tag'
export const deleteOneUsers = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneUsers (
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
