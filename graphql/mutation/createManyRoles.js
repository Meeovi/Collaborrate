import gql from 'graphql-tag'
export const createManyRoles = gql`
mutation (
    data: {
    $content: String!,
    $created_at: DateTime!,
    $id: Int!,
    $role_name: String!!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyRoles (
    data: {
    content: $content,
    created_at: $created_at,
    id: $id,
    role_name: $role_name,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
