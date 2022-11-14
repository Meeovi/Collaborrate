import gql from 'graphql-tag'
export const updateManyTransactions = gql`
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
    $AND: [TransactionsWhereInput!]!,
    $NOT: [TransactionsWhereInput!]!,
    $OR: [TransactionsWhereInput!]!,
    $closed: StringNullableFilter!,
    $created: DateTimeNullableFilter!,
    $customer_payment: StringNullableFilter!,
    $id: IntFilter!,
    $order_id: IntFilter!,
    $orders: StringNullableFilter!,
    $parent_transaction_id: IntFilter!,
    $payment_method: BigIntFilter!,
    $transaction_id: IntFilter!,
    }
  ) {
updateManyTransactions (
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
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    closed: $closed,
    created: $created,
    customer_payment: $customer_payment,
    id: $id,
    order_id: $order_id,
    orders: $orders,
    parent_transaction_id: $parent_transaction_id,
    payment_method: $payment_method,
    transaction_id: $transaction_id,
    }
  ) } {
    count
  }`
