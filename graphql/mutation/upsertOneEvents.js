import gql from 'graphql-tag'
export const upsertOneEvents = gql`
mutation (
    create: {
    $category: String!,
    $city: String!,
    $content: String!,
    $country: String!,
    $created_at: DateTime!,
    $end: String!,
    $id: BigInt!,
    $image: String!,
    $invitationBillingAddress: String!,
    $invitationCustomerName: String!,
    $invitationEmail: String!,
    $invitationGrandTotalPurchased: String!,
    $invitationInvoiceDate: String!,
    $invitationOrderNumber: String!,
    $invitationPaymentMethod: String!,
    $invitationShippingAddress: String!,
    $invitationStatus: String!,
    $media: String!,
    $name: String!,
    $postalcode: String!,
    $start: String!,
    $state: String!,
    $tickets: String!,
    $type: String!,
    }
    update: {
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
upsertOneEvents (
    create: {
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
    update: {
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
