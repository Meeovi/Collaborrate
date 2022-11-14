import gql from 'graphql-tag'
export const updateOneTransactions = gql`
mutation (
    data: {
    $closed: NullableStringFieldUpdateOperationsInput!,
    $created: NullableDateTimeFieldUpdateOperationsInput!,
    $customer_payment: NullableStringFieldUpdateOperationsInput!,
    $order_id: IntFieldUpdateOperationsInput!,
    $orders: NullableStringFieldUpdateOperationsInput!,
    $parent_transaction_id: IntFieldUpdateOperationsInput!,
    $payment_method: BigIntFieldUpdateOperationsInput!,
    $transaction_id: IntFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
updateOneTransactions (
    data: {
    closed: $closed,
    created: $created,
    customer_payment: $customer_payment,
    order_id: $order_id,
    orders: $orders,
    parent_transaction_id: $parent_transaction_id,
    payment_method: $payment_method,
    transaction_id: $transaction_id,
    }
    where: {
    id: $id,
    }
  ) } {
    closed
    created
    customer_payment
    id
    order_id
    orders
    parent_transaction_id
    payment_method
    transaction_id
  }`
