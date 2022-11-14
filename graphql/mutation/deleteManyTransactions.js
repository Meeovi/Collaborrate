import gql from 'graphql-tag'
export const deleteManyTransactions = gql`
mutation (
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
deleteManyTransactions (
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
