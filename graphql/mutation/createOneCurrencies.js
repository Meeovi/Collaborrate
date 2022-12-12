import gql from 'graphql-tag'
export const createOneCurrencies = gql`
mutation (
    data: {
    $code: String!,
    $created_at: DateTime!,
    $id: BigInt!,
    $name: String!,
    $region: String!,
    $symbol: String!,
    $useStandard: String!,
    }
  ) {
createOneCurrencies (
    data: {
    code: $code,
    created_at: $created_at,
    id: $id,
    name: $name,
    region: $region,
    symbol: $symbol,
    useStandard: $useStandard,
    }
  ) } {
    code
    created_at
    id
    name
    region
    symbol
    useStandard
  }`
