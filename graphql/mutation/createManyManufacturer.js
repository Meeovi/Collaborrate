import gql from 'graphql-tag'
export const createManyManufacturer = gql`
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
    $skipDuplicates: Boolean!,
  ) {
createManyManufacturer (
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
