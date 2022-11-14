import gql from 'graphql-tag'
export const createOneSegments = gql`
mutation (
    data: {
    $apply_to: String!,
    $created_at: DateTime!,
    $customers: String!,
    $description: String!,
    $id: BigInt!,
    $name: String!,
    $status: String!,
    $website: String!,
    }
  ) {
createOneSegments (
    data: {
    apply_to: $apply_to,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    id: $id,
    name: $name,
    status: $status,
    website: $website,
    }
  ) } {
    apply_to
    created_at
    customers
    description
    id
    name
    status
    website
  }`
