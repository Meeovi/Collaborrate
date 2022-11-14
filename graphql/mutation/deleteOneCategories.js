import gql from 'graphql-tag'
export const deleteOneCategories = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneCategories (
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
