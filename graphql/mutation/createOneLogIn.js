import gql from 'graphql-tag'
export const createOneLogIn = gql`
mutation (
    data: {
    $created_at: DateTime!,
    $email: String!,
    $expiresIn: String!,
    $id: BigInt!,
    $password: String!,
    $token: String!,
    $username: String!,
    $users: String!,
    }
  ) {
createOneLogIn (
    data: {
    created_at: $created_at,
    email: $email,
    expiresIn: $expiresIn,
    id: $id,
    password: $password,
    token: $token,
    username: $username,
    users: $users,
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
