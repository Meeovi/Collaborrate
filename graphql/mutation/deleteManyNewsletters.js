import gql from 'graphql-tag'
export const deleteManyNewsletters = gql`
mutation (
    where: {
    $AND: [NewslettersWhereInput!]!,
    $NOT: [NewslettersWhereInput!]!,
    $OR: [NewslettersWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $cust_id: IntFilter!,
    $customer_first_name: StringNullableFilter!,
    $customer_last_name: StringNullableFilter!,
    $customers: StringNullableFilter!,
    $email: StringFilter!,
    $id: IntFilter!,
    $status: StringNullableFilter!,
    $store: StringNullableFilter!,
    $websites: StringNullableFilter!,
    }
  ) {
deleteManyNewsletters (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
  ) } {
    count
  }`
