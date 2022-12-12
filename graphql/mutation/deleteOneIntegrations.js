import gql from 'graphql-tag'
export const deleteOneIntegrations = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneIntegrations (
    where: {
    id: $id,
    }
  ) } {
    category
    content
    created_at
    id
    location
    media
    name
  }`
