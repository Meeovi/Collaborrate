import gql from 'graphql-tag'
export const deleteOneRoles = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneRoles (
    where: {
    id: $id,
    }
  ) } {
    content
    created_at
    id
    role_name
  }`
