import gql from 'graphql-tag'
export const deleteManyPayments = gql`
mutation (
    where: {
    $AND: [PaymentsWhereInput!]!,
    $NOT: [PaymentsWhereInput!]!,
    $OR: [PaymentsWhereInput!]!,
    $active: StringNullableFilter!,
    $client_id: StringNullableFilter!,
    $client_secret: StringNullableFilter!,
    $country: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $host_uri: StringNullableFilter!,
    $icon: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringFilter!,
    $redirect_url: StringNullableFilter!,
    $redirect_url_app: StringNullableFilter!,
    }
  ) {
deleteManyPayments (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
  ) } {
    count
  }`
