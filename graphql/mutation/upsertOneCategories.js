import gql from 'graphql-tag'
export const upsertOneCategories = gql`
mutation (
    create: {
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
    update: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $meta_description: NullableStringFieldUpdateOperationsInput!,
    $meta_keywords: NullableStringFieldUpdateOperationsInput!,
    $meta_title: NullableStringFieldUpdateOperationsInput!,
    $meta_url: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $product: NullableStringFieldUpdateOperationsInput!,
    $status: NullableBoolFieldUpdateOperationsInput!,
    $thumbnail: NullableStringFieldUpdateOperationsInput!,
    $visibility: NullableStringFieldUpdateOperationsInput!,
    $websites: NullableStringFieldUpdateOperationsInput!,
    $workspaces: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneCategories (
    create: {
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
    update: {
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
    where: {
    id: $id,
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
