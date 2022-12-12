import gql from 'graphql-tag'
export const createManyChannels = gql`
mutation (
    data: {
    $client_id: String!,
    $client_secret: String!,
    $code: String!,
    $created_at: DateTime!,
    $currency: String!,
    $default_lang: String!,
    $default_shipping: String!,
    $default_zone: String!,
    $id: BigInt!,
    $include_tax: String!,
    $name: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyChannels (
    data: {
    client_id: $client_id,
    client_secret: $client_secret,
    code: $code,
    created_at: $created_at,
    currency: $currency,
    default_lang: $default_lang,
    default_shipping: $default_shipping,
    default_zone: $default_zone,
    id: $id,
    include_tax: $include_tax,
    name: $name,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
