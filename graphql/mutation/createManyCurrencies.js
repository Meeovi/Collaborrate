import gql from 'graphql-tag'
export const createManyCurrencies = gql`
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
    $skipDuplicates: Boolean!,
  ) {
createManyCurrencies (
    data: {
    code: $code,
    created_at: $created_at,
    id: $id,
    name: $name,
    region: $region,
    symbol: $symbol,
    useStandard: $useStandard,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
