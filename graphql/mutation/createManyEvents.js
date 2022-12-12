import gql from 'graphql-tag'
export const createManyEvents = gql`
mutation (
    data: {
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
    $skipDuplicates: Boolean!,
  ) {
createManyEvents (
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
