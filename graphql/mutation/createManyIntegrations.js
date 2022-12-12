import gql from 'graphql-tag'
export const createManyIntegrations = gql`
mutation (
    data: {
    $category: String!,
    $content: String!,
    $created_at: DateTime!,
    $id: BigInt!,
    $location: String!,
    $media: String!,
    $name: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyIntegrations (
    data: {
    category: $category,
    content: $content,
    created_at: $created_at,
    id: $id,
    location: $location,
    media: $media,
    name: $name,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
