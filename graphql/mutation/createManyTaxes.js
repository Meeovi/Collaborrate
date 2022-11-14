import gql from 'graphql-tag'
export const createManyTaxes = gql`
mutation (
    data: {
    $country: String!,
    $id: Int!,
    $postcode: String!,
    $products: String!,
    $rate_percent: String!,
    $state: String!,
    $taxCategory: String!,
    $taxDefault: String!,
    $taxRuleName: String!,
    $tax_identifier: String!!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyTaxes (
    data: {
    country: $country,
    id: $id,
    postcode: $postcode,
    products: $products,
    rate_percent: $rate_percent,
    state: $state,
    taxCategory: $taxCategory,
    taxDefault: $taxDefault,
    taxRuleName: $taxRuleName,
    tax_identifier: $tax_identifier,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
