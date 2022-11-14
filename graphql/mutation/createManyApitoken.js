import gql from 'graphql-tag'
export const createManyApitoken = gql`
mutation (
    data: {
    $created_at: DateTime!,
    $description: String!,
    $id: BigInt!,
    $name: String!!,
    $token: BigInt!!,
    $token_type: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyApitoken (
    data: {
    created_at: $created_at,
    description: $description,
    id: $id,
    name: $name,
    token: $token,
    token_type: $token_type,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
