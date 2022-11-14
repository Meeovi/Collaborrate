import gql from 'graphql-tag'
export const updateOnePages = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $content_title: NullableStringFieldUpdateOperationsInput!,
    $enable_page: NullableBoolFieldUpdateOperationsInput!,
    $meta_description: NullableStringFieldUpdateOperationsInput!,
    $meta_keywords: NullableStringFieldUpdateOperationsInput!,
    $meta_title: NullableStringFieldUpdateOperationsInput!,
    $title: StringFieldUpdateOperationsInput!,
    $url_key: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
updateOnePages (
    data: {
    content: $content,
    content_title: $content_title,
    enable_page: $enable_page,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    title: $title,
    url_key: $url_key,
    }
    where: {
    id: $id,
    }
  ) } {
    content
    content_title
    enable_page
    id
    meta_description
    meta_keywords
    meta_title
    title
    url_key
  }`
