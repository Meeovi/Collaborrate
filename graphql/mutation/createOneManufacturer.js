import gql from 'graphql-tag'
export const createOneManufacturer = gql`
mutation (
    data: {
    $city: String!,
    $code: String!,
    $country: String!,
    $created_at: DateTime!,
    $description: String!,
    $id: BigInt!,
    $isPublic: String!,
    $media: String!,
    $name: String!,
    $product: BigInt!,
    $products: String!,
    $state: String!,
    }
  ) {
createOneManufacturer (
    data: {
    city: $city,
    code: $code,
    country: $country,
    created_at: $created_at,
    description: $description,
    id: $id,
    isPublic: $isPublic,
    media: $media,
    name: $name,
    product: $product,
    products: $products,
    state: $state,
    }
  ) } {
    city
    code
    country
    created_at
    description
    id
    isPublic
    media
    name
    product
    products
    state
  }`
