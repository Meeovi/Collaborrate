import gql from 'graphql-tag'
export const deleteOneReturns = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneReturns (
    where: {
    id: $id,
    }
  ) } {
    case_id
    created_at
    customers
    description
    height
    howShipped
    id
    liquidationReason
    location
    media
    name
    products
    return_prefix
    shipTo
    shippingDescription
    shippingNumber
    status
    type
    validity
    weight
  }`
