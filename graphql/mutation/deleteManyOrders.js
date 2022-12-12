import gql from 'graphql-tag'
export const deleteManyOrders = gql`
mutation (
    where: {
    $AND: [OrdersWhereInput!]!,
    $NOT: [OrdersWhereInput!]!,
    $OR: [OrdersWhereInput!]!,
    $action: BoolNullableFilter!,
    $allocated_sources: StringNullableFilter!,
    $bill_to_name: StringFilter!,
    $braintree_transaction_source: StringNullableFilter!,
    $cust_id: IntFilter!,
    $customers: StringNullableFilter!,
    $grand_total_base: IntNullableFilter!,
    $grand_total_purchased: IntNullableFilter!,
    $id: IntFilter!,
    $prod_id: BigIntFilter!,
    $products: StringNullableFilter!,
    $purchase_date: DateTimeNullableFilter!,
    $purchase_point: IntNullableFilter!,
    $quotes: StringNullableFilter!,
    $ship_to_name: StringNullableFilter!,
    $status: BoolNullableFilter!,
    $transactions: StringNullableFilter!,
    }
  ) {
deleteManyOrders (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    action: $action,
    allocated_sources: $allocated_sources,
    bill_to_name: $bill_to_name,
    braintree_transaction_source: $braintree_transaction_source,
    cust_id: $cust_id,
    customers: $customers,
    grand_total_base: $grand_total_base,
    grand_total_purchased: $grand_total_purchased,
    id: $id,
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
    count
  }`
