import gql from 'graphql-tag'
export const deleteOneTags = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneTags (
    where: {
    id: $id,
    }
  ) } {
    articles
    categories
    customers
    excerpt
    id
    name
    products
    users
  }`
