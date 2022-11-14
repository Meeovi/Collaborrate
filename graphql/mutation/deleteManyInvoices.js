import gql from 'graphql-tag'
export const deleteManyInvoices = gql`
mutation (
    where: {
    $AND: [InvoicesWhereInput!]!,
    $NOT: [InvoicesWhereInput!]!,
    $OR: [InvoicesWhereInput!]!,
    $bill_to_name: StringFilter!,
    $billing_address: StringNullableFilter!,
    $customer_group: StringNullableFilter!,
    $customer_name: StringNullableFilter!,
    $email: StringNullableFilter!,
    $grand_total_base: StringNullableFilter!,
    $grand_total_purchased: StringNullableFilter!,
    $id: BigIntFilter!,
    $invoice: IntFilter!,
    $invoice_date: DateTimeNullableFilter!,
    $order_number: BigIntFilter!,
    $payment_method: StringNullableFilter!,
    $shipping_address: StringNullableFilter!,
    $shipping_and_handling: StringNullableFilter!,
    $shipping_information: StringNullableFilter!,
    $status: StringNullableFilter!,
    $subtotal: StringNullableFilter!,
    }
  ) {
deleteManyInvoices (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
    count
  }`
