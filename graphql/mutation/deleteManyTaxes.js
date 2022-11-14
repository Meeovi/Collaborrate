import gql from 'graphql-tag'
export const deleteManyTaxes = gql`
mutation (
    where: {
    $AND: [TaxesWhereInput!]!,
    $NOT: [TaxesWhereInput!]!,
    $OR: [TaxesWhereInput!]!,
    $country: StringNullableFilter!,
    $id: IntFilter!,
    $postcode: StringNullableFilter!,
    $products: StringNullableFilter!,
    $rate_percent: StringNullableFilter!,
    $state: StringNullableFilter!,
    $taxCategory: StringNullableFilter!,
    $taxDefault: StringNullableFilter!,
    $taxRuleName: StringNullableFilter!,
    $tax_identifier: StringFilter!,
    }
  ) {
deleteManyTaxes (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
  ) } {
    count
  }`
