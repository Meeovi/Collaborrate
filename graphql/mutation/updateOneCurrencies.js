import gql from 'graphql-tag'
export const updateOneCurrencies = gql`
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
    $id: BigInt!,
    }
  ) {
updateOneCurrencies (
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
