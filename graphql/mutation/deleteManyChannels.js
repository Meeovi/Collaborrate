import gql from 'graphql-tag'
export const deleteManyChannels = gql`
mutation (
    where: {
    $AND: [ChannelsWhereInput!]!,
    $NOT: [ChannelsWhereInput!]!,
    $OR: [ChannelsWhereInput!]!,
    $client_id: StringNullableFilter!,
    $client_secret: StringNullableFilter!,
    $code: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $currency: StringNullableFilter!,
    $default_lang: StringNullableFilter!,
    $default_shipping: StringNullableFilter!,
    $default_zone: StringNullableFilter!,
    $id: BigIntFilter!,
    $include_tax: StringNullableFilter!,
    $name: StringNullableFilter!,
    }
  ) {
deleteManyChannels (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
  ) } {
    count
  }`
