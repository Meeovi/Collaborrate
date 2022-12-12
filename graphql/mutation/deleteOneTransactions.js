import gql from 'graphql-tag'
export const deleteOneTransactions = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneTransactions (
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
