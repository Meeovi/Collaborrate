import gql from 'graphql-tag'
export const deleteOneArticles = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneArticles (
    where: {
    id: $id,
    }
  ) } {
    categories
    content
    cust_id
    customers
    excerpt
    id
    image
    isPublic
    meta_description
    meta_name
    meta_url
    name
    published
    tags
    type
    users
  }`
