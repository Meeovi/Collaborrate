import gql from 'graphql-tag'
export const createManyPayments = gql`
mutation (
    data: {
    $active: String!,
    $client_id: String!,
    $client_secret: String!,
    $country: String!,
    $created_at: DateTime!,
    $host_uri: String!,
    $icon: String!,
    $id: BigInt!,
    $name: String!!,
    $redirect_url: String!,
    $redirect_url_app: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyPayments (
    data: {
    active: $active,
    client_id: $client_id,
    client_secret: $client_secret,
    country: $country,
    created_at: $created_at,
    host_uri: $host_uri,
    icon: $icon,
    id: $id,
    name: $name,
    redirect_url: $redirect_url,
    redirect_url_app: $redirect_url_app,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
