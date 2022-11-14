import gql from 'graphql-tag'
export const upsertOneLogIn = gql`
mutation (
    create: {
    $created_at: DateTime!,
    $email: String!,
    $expiresIn: String!,
    $id: BigInt!,
    $password: String!,
    $token: String!,
    $username: String!,
    $users: String!,
    }
    update: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $email: NullableStringFieldUpdateOperationsInput!,
    $expiresIn: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $password: NullableStringFieldUpdateOperationsInput!,
    $token: NullableStringFieldUpdateOperationsInput!,
    $username: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOneLogIn (
    create: {
    created_at: $created_at,
    email: $email,
    expiresIn: $expiresIn,
    id: $id,
    password: $password,
    token: $token,
    username: $username,
    users: $users,
    }
    update: {
    created_at: $created_at,
    email: $email,
    expiresIn: $expiresIn,
    id: $id,
    password: $password,
    token: $token,
    username: $username,
    users: $users,
    }
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
