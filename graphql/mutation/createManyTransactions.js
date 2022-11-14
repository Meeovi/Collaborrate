import gql from 'graphql-tag'
export const createManyTransactions = gql`
mutation (
    data: {
    $closed: String!,
    $created: DateTime!,
    $customer_payment: String!,
    $id: Int!,
    $order_id: Int!!,
    $orders: String!,
    $parent_transaction_id: Int!!,
    $payment_method: BigInt!!,
    $transaction_id: Int!!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyTransactions (
    data: {
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
