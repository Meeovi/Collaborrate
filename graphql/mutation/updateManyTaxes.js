import gql from 'graphql-tag'
export const updateManyTaxes = gql`
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
updateManyTaxes (
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
