import gql from 'graphql-tag'
export const createManySegments = gql`
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
    $skipDuplicates: Boolean!,
  ) {
createManySegments (
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
