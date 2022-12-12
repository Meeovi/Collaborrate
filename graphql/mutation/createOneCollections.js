import gql from 'graphql-tag'
export const createOneCollections = gql`
mutation (
    data: {
    $created_at: DateTime!,
    $description: String!,
    $id: BigInt!,
    $image: String!,
    $meta_description: String!,
    $meta_keywords: String!,
    $meta_title: String!,
    $name: String!,
    $product: String!,
    }
  ) {
createOneCollections (
    data: {
    created_at: $created_at,
    description: $description,
    id: $id,
    image: $image,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    name: $name,
    product: $product,
    }
  ) } {
    created_at
    description
    id
    image
    meta_description
    meta_keywords
    meta_title
    name
    product
  }`
