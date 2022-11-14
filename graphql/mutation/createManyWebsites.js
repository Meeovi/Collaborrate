import gql from 'graphql-tag'
export const createManyWebsites = gql`
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
    $skipDuplicates: Boolean!,
  ) {
createManyWebsites (
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
