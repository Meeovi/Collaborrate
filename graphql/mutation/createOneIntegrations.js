import gql from 'graphql-tag'
export const createOneIntegrations = gql`
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
  ) {
createOneIntegrations (
    data: {
    category: $category,
    content: $content,
    created_at: $created_at,
    id: $id,
    location: $location,
    media: $media,
    name: $name,
    }
  ) } {
    category
    content
    created_at
    id
    location
    media
    name
  }`
