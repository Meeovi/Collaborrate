import gql from 'graphql-tag'
export const createOneTransactions = gql`
mutation (
    data: {
    $closed: String!,
    $created: DateTime!,
    $customer_payment: String!,
    $order_id: Int!!,
    $orders: String!,
    $parent_transaction_id: Int!!,
    $payment_method: BigInt!!,
    $transaction_id: Int!!,
    }
  ) {
createOneTransactions (
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
