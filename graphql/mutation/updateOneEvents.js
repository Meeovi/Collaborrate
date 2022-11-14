import gql from 'graphql-tag'
export const updateOneEvents = gql`
mutation (
    data: {
    $category: NullableStringFieldUpdateOperationsInput!,
    $city: NullableStringFieldUpdateOperationsInput!,
    $content: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $end: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $invitationBillingAddress: NullableStringFieldUpdateOperationsInput!,
    $invitationCustomerName: NullableStringFieldUpdateOperationsInput!,
    $invitationEmail: NullableStringFieldUpdateOperationsInput!,
    $invitationGrandTotalPurchased: NullableStringFieldUpdateOperationsInput!,
    $invitationInvoiceDate: NullableStringFieldUpdateOperationsInput!,
    $invitationOrderNumber: NullableStringFieldUpdateOperationsInput!,
    $invitationPaymentMethod: NullableStringFieldUpdateOperationsInput!,
    $invitationShippingAddress: NullableStringFieldUpdateOperationsInput!,
    $invitationStatus: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $postalcode: NullableStringFieldUpdateOperationsInput!,
    $start: NullableStringFieldUpdateOperationsInput!,
    $state: NullableStringFieldUpdateOperationsInput!,
    $tickets: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneEvents (
    data: {
    category: $category,
    city: $city,
    content: $content,
    country: $country,
    created_at: $created_at,
    end: $end,
    id: $id,
    image: $image,
    invitationBillingAddress: $invitationBillingAddress,
    invitationCustomerName: $invitationCustomerName,
    invitationEmail: $invitationEmail,
    invitationGrandTotalPurchased: $invitationGrandTotalPurchased,
    invitationInvoiceDate: $invitationInvoiceDate,
    invitationOrderNumber: $invitationOrderNumber,
    invitationPaymentMethod: $invitationPaymentMethod,
    invitationShippingAddress: $invitationShippingAddress,
    invitationStatus: $invitationStatus,
    media: $media,
    name: $name,
    postalcode: $postalcode,
    start: $start,
    state: $state,
    tickets: $tickets,
    type: $type,
    }
    where: {
    id: $id,
    }
  ) } {
    category
    city
    content
    country
    created_at
    end
    id
    image
    invitationBillingAddress
    invitationCustomerName
    invitationEmail
    invitationGrandTotalPurchased
    invitationInvoiceDate
    invitationOrderNumber
    invitationPaymentMethod
    invitationShippingAddress
    invitationStatus
    media
    name
    postalcode
    start
    state
    tickets
    type
  }`
