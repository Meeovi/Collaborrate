import gql from 'graphql-tag'
export const upsertOneCurrencies = gql`
mutation (
    create: {
    $code: String!,
    $created_at: DateTime!,
    $id: BigInt!,
    $name: String!,
    $region: String!,
    $symbol: String!,
    $useStandard: String!,
    }
    update: {
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
upsertOneCurrencies (
    create: {
    code: $code,
    created_at: $created_at,
    id: $id,
    name: $name,
    region: $region,
    symbol: $symbol,
    useStandard: $useStandard,
    }
    update: {
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
