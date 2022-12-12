import gql from 'graphql-tag'
export const createOneCategories = gql`
mutation (
    data: {
    $content: String!,
    $country: String!,
    $description: String!,
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
  ) {
createOneCategories (
    data: {
    content: $content,
    country: $country,
    description: $description,
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
  ) } {
    content
    country
    description
    id
    image
    meta_description
    meta_keywords
    meta_title
    meta_url
    name
    product
    status
    thumbnail
    visibility
    websites
    workspaces
  }`
