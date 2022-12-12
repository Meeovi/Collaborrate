import gql from 'graphql-tag'
export const deleteOneLogIn = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneLogIn (
    where: {
    id: $id,
    }
  ) } {
    created_at
    email
    expiresIn
    id
    password
    token
    username
    users
  }`
