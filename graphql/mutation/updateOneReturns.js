import gql from 'graphql-tag'
export const updateOneReturns = gql`
mutation (
    data: {
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
updateOneReturns (
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
