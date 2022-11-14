import gql from 'graphql-tag'
export const deleteOneEvents = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneEvents (
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
