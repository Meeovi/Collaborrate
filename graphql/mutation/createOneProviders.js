import gql from 'graphql-tag'
export const createOneProviders = gql`
mutation (
    data: {
    $active: String!,
    $client_id: String!,
    $client_secret: String!,
    $created_at: DateTime!,
    $host_uri: String!,
    $icon: String!,
    $id: BigInt!,
    $name: String!!,
    $redirect_url: String!,
    $redirect_url_app: String!,
    }
  ) {
createOneProviders (
    data: {
    active: $active,
    client_id: $client_id,
    client_secret: $client_secret,
    created_at: $created_at,
    host_uri: $host_uri,
    icon: $icon,
    id: $id,
    name: $name,
    redirect_url: $redirect_url,
    redirect_url_app: $redirect_url_app,
    }
  ) } {
    active
    client_id
    client_secret
    created_at
    host_uri
    icon
    id
    name
    redirect_url
    redirect_url_app
  }`
