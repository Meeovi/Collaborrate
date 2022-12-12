import gql from 'graphql-tag'
export const deleteOnePlugins = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOnePlugins (
    where: {
    id: $id,
    }
  ) } {
    agree_terms
    created_at
    description
    github_link
    id
    last_updated
    logo
    name
    publisher_email
    publisher_name
    screenshots
    url
  }`
