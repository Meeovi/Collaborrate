import gql from 'graphql-tag'
export const createManyNewsletters = gql`
mutation (
    data: {
    $created_at: DateTime!,
    $cust_id: Int!!,
    $customer_first_name: String!,
    $customer_last_name: String!,
    $customers: String!,
    $email: String!!,
    $id: Int!,
    $status: String!,
    $store: String!,
    $websites: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyNewsletters (
    data: {
    created_at: $created_at,
    cust_id: $cust_id,
    customer_first_name: $customer_first_name,
    customer_last_name: $customer_last_name,
    customers: $customers,
    email: $email,
    id: $id,
    status: $status,
    store: $store,
    websites: $websites,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
