import gql from 'graphql-tag'
export const updateManyCurrencies = gql`
mutation (
    data: {
    $code: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $region: NullableStringFieldUpdateOperationsInput!,
    $symbol: NullableStringFieldUpdateOperationsInput!,
    $useStandard: NullableStringFieldUpdateOperationsInput!,
    }
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
updateManyCurrencies (
    data: {
    code: $code,
    created_at: $created_at,
    id: $id,
    name: $name,
    region: $region,
    symbol: $symbol,
    useStandard: $useStandard,
    }
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
