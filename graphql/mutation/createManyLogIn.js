import gql from 'graphql-tag'
export const createManyLogIn = gql`
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
    $skipDuplicates: Boolean!,
  ) {
createManyLogIn (
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
