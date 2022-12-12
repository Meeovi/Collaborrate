import gql from 'graphql-tag'
export const deleteOnePages = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOnePages (
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
