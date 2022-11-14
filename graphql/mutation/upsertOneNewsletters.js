import gql from 'graphql-tag'
export const upsertOneNewsletters = gql`
mutation (
    create: {
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
    update: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $cust_id: IntFieldUpdateOperationsInput!,
    $customer_first_name: NullableStringFieldUpdateOperationsInput!,
    $customer_last_name: NullableStringFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $email: StringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    $store: NullableStringFieldUpdateOperationsInput!,
    $websites: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $email: String!,
    $id: Int!,
    }
  ) {
upsertOneNewsletters (
    create: {
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
    update: {
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
