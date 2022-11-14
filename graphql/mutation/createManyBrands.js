import gql from 'graphql-tag'
export const createManyBrands = gql`
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
    $skipDuplicates: Boolean!,
  ) {
createManyBrands (
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
