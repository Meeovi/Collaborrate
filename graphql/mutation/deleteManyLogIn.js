import gql from 'graphql-tag'
export const deleteManyLogIn = gql`
mutation (
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
deleteManyLogIn (
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
