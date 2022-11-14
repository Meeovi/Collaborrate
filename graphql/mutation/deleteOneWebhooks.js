import gql from 'graphql-tag'
export const deleteOneWebhooks = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneWebhooks (
    where: {
    id: $id,
    }
  ) } {
    create
    created_at
    delete
    headers
    id
    name
    publish
    retrieve
    unpublish
    update
    url
  }`
