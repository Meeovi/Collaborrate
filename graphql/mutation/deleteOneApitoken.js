import gql from 'graphql-tag'
export const deleteOneApitoken = gql`
mutation (
    where: {
    $id: BigInt!,
    $name: String!,
    $token: BigInt!,
    }
  ) {
deleteOneApitoken (
    where: {
    id: $id,
    name: $name,
    token: $token,
    }
  ) } {
    created_at
    description
    id
    name
    token
    token_type
  }`
