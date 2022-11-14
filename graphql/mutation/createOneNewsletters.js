import gql from 'graphql-tag'
export const createOneNewsletters = gql`
mutation (
    data: {
    $created_at: DateTime!,
    $cust_id: Int!!,
    $customer_first_name: String!,
    $customer_last_name: String!,
    $customers: String!,
    $email: String!!,
    $status: String!,
    $store: String!,
    $websites: String!,
    }
  ) {
createOneNewsletters (
    data: {
    created_at: $created_at,
    cust_id: $cust_id,
    customer_first_name: $customer_first_name,
    customer_last_name: $customer_last_name,
    customers: $customers,
    email: $email,
    status: $status,
    store: $store,
    websites: $websites,
    }
  ) } {
    created_at
    cust_id
    customer_first_name
    customer_last_name
    customers
    email
    id
    status
    store
    websites
  }`
