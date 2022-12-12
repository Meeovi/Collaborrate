import gql from 'graphql-tag'
export const deleteOneWebsites = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneWebsites (
    where: {
    id: $id,
    }
  ) } {
    category
    created_at
    id
    image
    name
    shop
    store
    themes
    url
  }`
