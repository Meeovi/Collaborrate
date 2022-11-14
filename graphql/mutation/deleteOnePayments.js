import gql from 'graphql-tag'
export const deleteOnePayments = gql`
mutation (
    where: {
    $id: BigInt!,
    $name: String!,
    }
  ) {
deleteOnePayments (
    where: {
    id: $id,
    name: $name,
    }
  ) } {
    active
    client_id
    client_secret
    country
    created_at
    host_uri
    icon
    id
    name
    redirect_url
    redirect_url_app
  }`
