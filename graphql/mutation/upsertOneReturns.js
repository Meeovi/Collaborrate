import gql from 'graphql-tag'
export const upsertOneReturns = gql`
mutation (
    create: {
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
    update: {
    $case_id: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $height: NullableStringFieldUpdateOperationsInput!,
    $howShipped: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $liquidationReason: NullableStringFieldUpdateOperationsInput!,
    $location: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $return_prefix: NullableStringFieldUpdateOperationsInput!,
    $shipTo: NullableStringFieldUpdateOperationsInput!,
    $shippingDescription: NullableStringFieldUpdateOperationsInput!,
    $shippingNumber: NullableStringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $validity: NullableStringFieldUpdateOperationsInput!,
    $weight: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOneReturns (
    create: {
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
    update: {
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
