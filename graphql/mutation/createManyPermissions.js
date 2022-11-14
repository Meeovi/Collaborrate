import gql from 'graphql-tag'
export const createManyPermissions = gql`
mutation (
    data: {
    $content: String!,
    $create: String!,
    $created_at: DateTime!,
    $delete: String!,
    $id: BigInt!,
    $name: String!,
    $read: String!,
    $role: String!,
    $update: String!,
    $users: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyPermissions (
    data: {
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
