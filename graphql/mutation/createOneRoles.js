import gql from 'graphql-tag'
export const createOneRoles = gql`
mutation (
    data: {
    $content: String!,
    $created_at: DateTime!,
    $role_name: String!!,
    }
  ) {
createOneRoles (
    data: {
    content: $content,
    created_at: $created_at,
    role_name: $role_name,
    }
  ) } {
    content
    created_at
    id
    role_name
  }`
