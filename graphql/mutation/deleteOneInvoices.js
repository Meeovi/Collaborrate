import gql from 'graphql-tag'
export const deleteOneInvoices = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneInvoices (
    where: {
    id: $id,
    }
  ) } {
    bill_to_name
    billing_address
    customer_group
    customer_name
    email
    grand_total_base
    grand_total_purchased
    id
    invoice
    invoice_date
    order_number
    payment_method
    shipping_address
    shipping_and_handling
    shipping_information
    status
    subtotal
  }`
