import gql from 'graphql-tag'
export const deleteOneChannels = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneChannels (
    where: {
    id: $id,
    }
  ) } {
    client_id
    client_secret
    code
    created_at
    currency
    default_lang
    default_shipping
    default_zone
    id
    include_tax
    name
  }`
