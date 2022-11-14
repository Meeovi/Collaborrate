import gql from 'graphql-tag'
export const createManyCategories = gql`
mutation (
    data: {
    $content: String!,
    $country: String!,
    $description: String!,
    $id: Int!,
    $image: String!,
    $meta_description: String!,
    $meta_keywords: String!,
    $meta_title: String!,
    $meta_url: String!,
    $name: String!!,
    $product: String!,
    $status: Boolean!,
    $thumbnail: String!,
    $visibility: String!,
    $websites: String!,
    $workspaces: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyCategories (
    data: {
    content: $content,
    country: $country,
    description: $description,
    id: $id,
    image: $image,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    meta_url: $meta_url,
    name: $name,
    product: $product,
    status: $status,
    thumbnail: $thumbnail,
    visibility: $visibility,
    websites: $websites,
    workspaces: $workspaces,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
