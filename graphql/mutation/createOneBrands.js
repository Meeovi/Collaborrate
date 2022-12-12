import gql from 'graphql-tag'
export const createOneBrands = gql`
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
    $mediamanager: String!,
    $name: String!,
    $product: BigInt!,
    $products: String!,
    $state: String!,
    $workspaces: String!,
    }
  ) {
createOneBrands (
    data: {
    city: $city,
    code: $code,
    country: $country,
    created_at: $created_at,
    description: $description,
    id: $id,
    isPublic: $isPublic,
    media: $media,
    mediamanager: $mediamanager,
    name: $name,
    product: $product,
    products: $products,
    state: $state,
    workspaces: $workspaces,
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
    mediamanager
    name
    product
    products
    state
    workspaces
  }`
