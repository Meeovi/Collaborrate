import gql from 'graphql-tag'
export const updateOneOrders = gql`
mutation (
    data: {
    $action: NullableBoolFieldUpdateOperationsInput!,
    $allocated_sources: NullableStringFieldUpdateOperationsInput!,
    $bill_to_name: StringFieldUpdateOperationsInput!,
    $braintree_transaction_source: NullableStringFieldUpdateOperationsInput!,
    $cust_id: IntFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $grand_total_base: NullableIntFieldUpdateOperationsInput!,
    $grand_total_purchased: NullableIntFieldUpdateOperationsInput!,
    $prod_id: BigIntFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $purchase_date: NullableDateTimeFieldUpdateOperationsInput!,
    $purchase_point: NullableIntFieldUpdateOperationsInput!,
    $quotes: NullableStringFieldUpdateOperationsInput!,
    $ship_to_name: NullableStringFieldUpdateOperationsInput!,
    $status: NullableBoolFieldUpdateOperationsInput!,
    $transactions: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
updateOneOrders (
    data: {
    action: $action,
    allocated_sources: $allocated_sources,
    bill_to_name: $bill_to_name,
    braintree_transaction_source: $braintree_transaction_source,
    cust_id: $cust_id,
    customers: $customers,
    grand_total_base: $grand_total_base,
    grand_total_purchased: $grand_total_purchased,
    prod_id: $prod_id,
    products: $products,
    purchase_date: $purchase_date,
    purchase_point: $purchase_point,
    quotes: $quotes,
    ship_to_name: $ship_to_name,
    status: $status,
    transactions: $transactions,
    }
    where: {
    id: $id,
    }
  ) } {
    action
    allocated_sources
    bill_to_name
    braintree_transaction_source
    cust_id
    customers
    grand_total_base
    grand_total_purchased
    id
    prod_id
    products
    purchase_date
    purchase_point
    quotes
    ship_to_name
    status
    transactions
  }`
