import gql from 'graphql-tag'
export const deleteOnePermissions = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOnePermissions (
    where: {
    id: $id,
    }
  ) } {
    content
    create
    created_at
    delete
    id
    name
    read
    role
    update
    users
  }`
