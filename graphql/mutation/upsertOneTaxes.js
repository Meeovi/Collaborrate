import gql from 'graphql-tag'
export const upsertOneTaxes = gql`
mutation (
    create: {
    $country: String!,
    $postcode: String!,
    $products: String!,
    $rate_percent: String!,
    $state: String!,
    $taxCategory: String!,
    $taxDefault: String!,
    $taxRuleName: String!,
    $tax_identifier: String!!,
    }
    update: {
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
upsertOneTaxes (
    create: {
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
    update: {
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
