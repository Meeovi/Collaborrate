import gql from 'graphql-tag'
export const deleteOneTaxes = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneTaxes (
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
