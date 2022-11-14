import gql from 'graphql-tag'
export const createOneReturns = gql`
mutation (
    data: {
    $case_id: String!,
    $created_at: DateTime!,
    $customers: String!,
    $description: String!,
    $height: String!,
    $howShipped: String!,
    $id: BigInt!,
    $liquidationReason: String!,
    $location: String!,
    $media: String!,
    $name: String!,
    $products: String!,
    $return_prefix: String!,
    $shipTo: String!,
    $shippingDescription: String!,
    $shippingNumber: String!,
    $status: String!,
    $type: String!,
    $validity: String!,
    $weight: String!,
    }
  ) {
createOneReturns (
    data: {
    case_id: $case_id,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    height: $height,
    howShipped: $howShipped,
    id: $id,
    liquidationReason: $liquidationReason,
    location: $location,
    media: $media,
    name: $name,
    products: $products,
    return_prefix: $return_prefix,
    shipTo: $shipTo,
    shippingDescription: $shippingDescription,
    shippingNumber: $shippingNumber,
    status: $status,
    type: $type,
    validity: $validity,
    weight: $weight,
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
