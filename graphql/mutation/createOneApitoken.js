import gql from 'graphql-tag'
export const createOneApitoken = gql`
mutation (
    data: {
    $created_at: DateTime!,
    $description: String!,
    $id: BigInt!,
    $name: String!!,
    $token: BigInt!!,
    $token_type: String!,
    }
  ) {
createOneApitoken (
    data: {
    created_at: $created_at,
    description: $description,
    id: $id,
    name: $name,
    token: $token,
    token_type: $token_type,
    }
  ) } {
    created_at
    description
    id
    name
    token
    token_type
  }`
