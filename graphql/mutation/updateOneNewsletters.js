import gql from 'graphql-tag'
export const updateOneNewsletters = gql`
mutation (
    data: {
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
updateOneNewsletters (
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
