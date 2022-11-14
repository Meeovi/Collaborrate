import gql from 'graphql-tag'
export const createOneWebhooks = gql`
mutation (
    data: {
    $create: String!,
    $created_at: DateTime!,
    $delete: String!,
    $headers: String!,
    $id: BigInt!,
    $name: String!!,
    $publish: String!,
    $retrieve: String!,
    $unpublish: String!,
    $update: String!,
    $url: String!!,
    }
  ) {
createOneWebhooks (
    data: {
    create: $create,
    created_at: $created_at,
    delete: $delete,
    headers: $headers,
    id: $id,
    name: $name,
    publish: $publish,
    retrieve: $retrieve,
    unpublish: $unpublish,
    update: $update,
    url: $url,
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
