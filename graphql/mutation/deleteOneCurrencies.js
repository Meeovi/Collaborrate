import gql from 'graphql-tag'
export const deleteOneCurrencies = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneCurrencies (
    where: {
    id: $id,
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
