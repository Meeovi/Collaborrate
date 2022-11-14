import gql from 'graphql-tag'
export const deleteOneNewsletters = gql`
mutation (
    where: {
    $email: String!,
    $id: Int!,
    }
  ) {
deleteOneNewsletters (
    where: {
    email: $email,
    id: $id,
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
