import gql from 'graphql-tag'
export const createOneInvoices = gql`
mutation (
    data: {
    $bill_to_name: String!!,
    $billing_address: String!,
    $customer_group: String!,
    $customer_name: String!,
    $email: String!,
    $grand_total_base: String!,
    $grand_total_purchased: String!,
    $id: BigInt!,
    $invoice: Int!!,
    $invoice_date: DateTime!,
    $order_number: BigInt!!,
    $payment_method: String!,
    $shipping_address: String!,
    $shipping_and_handling: String!,
    $shipping_information: String!,
    $status: String!,
    $subtotal: String!,
    }
  ) {
createOneInvoices (
    data: {
    bill_to_name: $bill_to_name,
    billing_address: $billing_address,
    customer_group: $customer_group,
    customer_name: $customer_name,
    email: $email,
    grand_total_base: $grand_total_base,
    grand_total_purchased: $grand_total_purchased,
    id: $id,
    invoice: $invoice,
    invoice_date: $invoice_date,
    order_number: $order_number,
    payment_method: $payment_method,
    shipping_address: $shipping_address,
    shipping_and_handling: $shipping_and_handling,
    shipping_information: $shipping_information,
    status: $status,
    subtotal: $subtotal,
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
