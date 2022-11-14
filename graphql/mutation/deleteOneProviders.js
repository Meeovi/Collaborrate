import gql from 'graphql-tag'
export const deleteOneProviders = gql`
mutation (
    where: {
    $id: BigInt!,
    $name: String!,
    }
  ) {
deleteOneProviders (
    where: {
    id: $id,
    name: $name,
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
