import gql from 'graphql-tag'
export const upsertOnePages = gql`
mutation (
    create: {
    $content: String!,
    $content_title: String!,
    $enable_page: Boolean!,
    $meta_description: String!,
    $meta_keywords: String!,
    $meta_title: String!,
    $title: String!!,
    $url_key: String!,
    }
    update: {
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
upsertOnePages (
    create: {
    content: $content,
    content_title: $content_title,
    enable_page: $enable_page,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    title: $title,
    url_key: $url_key,
    }
    update: {
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
