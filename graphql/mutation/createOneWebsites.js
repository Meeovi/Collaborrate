import gql from 'graphql-tag'
export const createOneWebsites = gql`
mutation (
    data: {
    $category: String!,
    $created_at: DateTime!,
    $id: BigInt!,
    $image: String!,
    $name: String!,
    $shop: String!,
    $store: String!,
    $themes: String!,
    $url: String!,
    }
  ) {
createOneWebsites (
    data: {
    category: $category,
    created_at: $created_at,
    id: $id,
    image: $image,
    name: $name,
    shop: $shop,
    store: $store,
    themes: $themes,
    url: $url,
    }
  ) } {
    category
    created_at
    id
    image
    name
    shop
    store
    themes
    url
  }`
