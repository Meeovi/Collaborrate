import gql from 'graphql-tag'
export const updateOneInvoices = gql`
mutation (
    data: {
    $bill_to_name: StringFieldUpdateOperationsInput!,
    $billing_address: NullableStringFieldUpdateOperationsInput!,
    $customer_group: NullableStringFieldUpdateOperationsInput!,
    $customer_name: NullableStringFieldUpdateOperationsInput!,
    $email: NullableStringFieldUpdateOperationsInput!,
    $grand_total_base: NullableStringFieldUpdateOperationsInput!,
    $grand_total_purchased: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $invoice: IntFieldUpdateOperationsInput!,
    $invoice_date: NullableDateTimeFieldUpdateOperationsInput!,
    $order_number: BigIntFieldUpdateOperationsInput!,
    $payment_method: NullableStringFieldUpdateOperationsInput!,
    $shipping_address: NullableStringFieldUpdateOperationsInput!,
    $shipping_and_handling: NullableStringFieldUpdateOperationsInput!,
    $shipping_information: NullableStringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    $subtotal: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneInvoices (
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
