import gql from 'graphql-tag'
export const updateManyLogIn = gql`
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
    $AND: [LogInWhereInput!]!,
    $NOT: [LogInWhereInput!]!,
    $OR: [LogInWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $email: StringNullableFilter!,
    $expiresIn: StringNullableFilter!,
    $id: BigIntFilter!,
    $password: StringNullableFilter!,
    $token: StringNullableFilter!,
    $username: StringNullableFilter!,
    $users: StringNullableFilter!,
    }
  ) {
updateManyLogIn (
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
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
    count
  }`
