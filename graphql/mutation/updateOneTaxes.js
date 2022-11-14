import gql from 'graphql-tag'
export const updateOneTaxes = gql`
mutation (
    data: {
    $country: NullableStringFieldUpdateOperationsInput!,
    $postcode: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $rate_percent: NullableStringFieldUpdateOperationsInput!,
    $state: NullableStringFieldUpdateOperationsInput!,
    $taxCategory: NullableStringFieldUpdateOperationsInput!,
    $taxDefault: NullableStringFieldUpdateOperationsInput!,
    $taxRuleName: NullableStringFieldUpdateOperationsInput!,
    $tax_identifier: StringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
updateOneTaxes (
    data: {
    country: $country,
    postcode: $postcode,
    products: $products,
    rate_percent: $rate_percent,
    state: $state,
    taxCategory: $taxCategory,
    taxDefault: $taxDefault,
    taxRuleName: $taxRuleName,
    tax_identifier: $tax_identifier,
    }
    where: {
    id: $id,
    }
  ) } {
    country
    id
    postcode
    products
    rate_percent
    state
    taxCategory
    taxDefault
    taxRuleName
    tax_identifier
  }`
