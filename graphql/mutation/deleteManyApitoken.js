import gql from 'graphql-tag'
export const deleteManyApitoken = gql`
mutation (
    where: {
    $AND: [ApitokenWhereInput!]!,
    $NOT: [ApitokenWhereInput!]!,
    $OR: [ApitokenWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringFilter!,
    $token: BigIntFilter!,
    $token_type: StringNullableFilter!,
    }
  ) {
deleteManyApitoken (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    created_at: $created_at,
    description: $description,
    id: $id,
    name: $name,
    token: $token,
    token_type: $token_type,
    }
  ) } {
    count
  }`
