import gql from 'graphql-tag'
export const createOneTaxes = gql`
mutation (
    data: {
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
  ) {
createOneTaxes (
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
