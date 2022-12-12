import gql from 'graphql-tag'
export const createManyInternalization = gql`
mutation (
    data: {
    $created_at: DateTime!,
    $default: String!,
    $description: String!,
    $id: BigInt!,
    $name: String!,
    $region: String!,
    $website: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyInternalization (
    data: {
    created_at: $created_at,
    default: $default,
    description: $description,
    id: $id,
    name: $name,
    region: $region,
    website: $website,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
