import gql from 'graphql-tag'
export const updateOneLogIn = gql`
mutation (
    data: {
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
updateOneLogIn (
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
