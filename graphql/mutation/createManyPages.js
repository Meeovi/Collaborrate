import gql from 'graphql-tag'
export const createManyPages = gql`
mutation (
    data: {
    $content: String!,
    $content_title: String!,
    $enable_page: Boolean!,
    $id: Int!,
    $meta_description: String!,
    $meta_keywords: String!,
    $meta_title: String!,
    $title: String!!,
    $url_key: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyPages (
    data: {
    content: $content,
    content_title: $content_title,
    enable_page: $enable_page,
    id: $id,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    title: $title,
    url_key: $url_key,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
