import gql from 'graphql-tag'
export const createOneWarehouse = gql`
mutation (
    data: {
    $category: String!,
    $city: String!,
    $country: String!,
    $created_at: DateTime!,
    $description: String!,
    $id: BigInt!,
    $image: String!,
    $isPublic: String!,
    $name: String!,
    $postal: String!,
    $products: String!,
    $state: String!,
    $status: String!,
    }
  ) {
createOneWarehouse (
    data: {
    category: $category,
    city: $city,
    country: $country,
    created_at: $created_at,
    description: $description,
    id: $id,
    image: $image,
    isPublic: $isPublic,
    name: $name,
    postal: $postal,
    products: $products,
    state: $state,
    status: $status,
    }
  ) } {
    category
    city
    country
    created_at
    description
    id
    image
    isPublic
    name
    postal
    products
    state
    status
  }`
