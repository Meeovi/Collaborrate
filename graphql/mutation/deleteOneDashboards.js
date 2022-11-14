import gql from 'graphql-tag'
export const deleteOneDashboards = gql`
mutation (
    where: {
    $id: BigInt!,
    $name: String!,
    }
  ) {
deleteOneDashboards (
    where: {
    id: $id,
    name: $name,
    }
  ) } {
    articles
    category
    checklists
    client_id
    client_secret
    content
    created_at
    customers
    id
    logo
    media
    name
    privacy
    products
    projects
    published
    reports
    sales
    tasks
    tickets
    url
    users
    visits
  }`
