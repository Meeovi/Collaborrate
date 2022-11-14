import gql from 'graphql-tag'
export const deleteManyCurrencies = gql`
mutation (
    where: {
    $AND: [CurrenciesWhereInput!]!,
    $NOT: [CurrenciesWhereInput!]!,
    $OR: [CurrenciesWhereInput!]!,
    $code: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $id: BigIntFilter!,
    $name: StringNullableFilter!,
    $region: StringNullableFilter!,
    $symbol: StringNullableFilter!,
    $useStandard: StringNullableFilter!,
    }
  ) {
deleteManyCurrencies (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    code: $code,
    created_at: $created_at,
    id: $id,
    name: $name,
    region: $region,
    symbol: $symbol,
    useStandard: $useStandard,
    }
  ) } {
    count
  }`
