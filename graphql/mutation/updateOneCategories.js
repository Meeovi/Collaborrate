import gql from 'graphql-tag'
export const updateOneCategories = gql`
mutation (
    data: {
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
updateOneCategories (
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
