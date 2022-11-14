import gql from 'graphql-tag'
export const createOneOrders = gql`
mutation (
    data: {
    $action: Boolean!,
    $allocated_sources: String!,
    $bill_to_name: String!!,
    $braintree_transaction_source: String!,
    $cust_id: Int!!,
    $customers: String!,
    $grand_total_base: Int!,
    $grand_total_purchased: Int!,
    $prod_id: BigInt!!,
    $products: String!,
    $purchase_date: DateTime!,
    $purchase_point: Int!,
    $quotes: String!,
    $ship_to_name: String!,
    $status: Boolean!,
    $transactions: String!,
    }
  ) {
createOneOrders (
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
